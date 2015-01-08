module.exports=/*@ngInject*/function(d3){
  return {
    restrict: "AE",
    scope: {
      data: "="
    },
    controller: ["$scope",function($scope){
      $scope.data=[
        ["Q1",[20000,9879,5070,7343,9136,7943,10546,9385,8669]],
        ["Q2",[15000,9323,9395,8675,5354,6725,10899,9365,8238]],
        ["Q3",[8000,3294,17633,12121,4319,18712,17270,13676,6587]],
        ["Q4",[20000,5629,5752,7557,5125,5116,5828,6014,5995]]
      ];
    }],
    link: function($scope,$el){
      var iqr,labels,margin,width,height,max,min;
      iqr=function(k) {
        return function(d, i) {
          var q1 = d.quartiles[0],
              q3 = d.quartiles[2],
              iqr = (q3 - q1) * k,
              i = -1,
              j = d.length;
          while (d[++i] < q1 - iqr);
          while (d[--j] > q3 + iqr);
          return [i, j];
        };
      };
      labels = true; // show the text labels beside individual boxplots?
      margin = {
        top: 30,
        right: 50,
        bottom: 70,
        left: 50
      };
       width = 800 - margin.left - margin.right;
      height = 400 - margin.top - margin.bottom;

      var render=function(data){
        max=_.reduce(data,function(r,d){
          var x=_.max(d[1]);
          return x>r ? x : r;
        },-Infinity);
        min=_.reduce(data,function(r,d){
          var x=_.min(d[1]);
          return x<r ? x : r;
        },Infinity);
        var chart = d3.box()
        .whiskers(iqr(1.5))
        .height(height)
        .domain([min, max])
        .showLabels(labels);

        var svg = d3.select($el[0]).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class", "box")    
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // the x-axis
        var x = d3.scale.ordinal()	   
        .domain( data.map(function(d) { console.log(d); return d[0] } ) )	    
        .rangeRoundBands([0 , width], 0.7, 0.3); 		

        var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

        // the y-axis
        var y = d3.scale.linear()
        .domain([min, max])
        .range([height + margin.top, 0 + margin.top]);

        var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

        // draw the boxplots	
        svg.selectAll(".box")	   
        .data(data)
      	.enter().append("g")
        .attr("transform", function(d){
          return "translate(" +  x(d[0])  + "," + margin.top + ")";
        })
        .call(chart.width(x.rangeBand())); 

        // add a title
        svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 + (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "18px") 
        //.style("text-decoration", "underline")  
        .text("Revenue 2012");

        // draw y axis
        svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text") // and text1
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-size", "16px") 
        .text("Revenue in €");		

        // draw x axis	
        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height  + margin.top + 10) + ")")
        .call(xAxis)
        .append("text")             // text label for the x axis
        .attr("x", (width / 2) )
        .attr("y",  10 )
        .attr("dy", ".71em")
        .style("text-anchor", "middle")
        .style("font-size", "16px") 
        .text("Quarter"); 
      };
      render($scope.data);
      var renderListener=$scope.$watch("data",function(val){
        return render(val);
      });
      $scope.$on("destroy",function(){
        renderListener();
      });
    }
  };
};