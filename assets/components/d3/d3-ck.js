angular.module('d3',[]);
/*
@codekit-append "scale-service.js"
@codekit-append "my-barchart/my-barchart-directive.js"
*/

(function(){
"use strict";
angular.module("d3")
.factory("scale",function(){
	return {
		linear: function(domain,range){
			if(!domain){domain=[0,1];}
			if(!range){range=[0,1];}
			return function(num){
				if(!num){num=0;}
				return (range[1]-range[0])/(domain[1]-domain[0])*(num-domain[0])+range[0];
			};
		}
	};
});
}());

(function(){
"use strict";
angular.module("d3")
.controller("myBarchartCtrl",["$scope","$element",function($scope,$element){
	var self, scale;
	self=this;
	scale.linear=function(){
		return function(num){
			var domain,range;
			domain=[0,1];
			range=[0,1];
			this.domain=function(d){
				if(!d){return domain;}
				domain=d;
			};
			this.range=function(r){
				if(!r){return range;}
				range=r;
			};
			return (range[1]-range[0])/(domain[1]-domain[0])*(num-domain[0])+range[0];
		};
	};
	var testscale=scale.linear().domain([0,100]).range([0,10]);
	console.log(testscale(50));
	this.render=function(data){
		var margin,labelMargin,width,height,counts,barWidth,barPadding,min,max,hScale;
		margin=$scope.margin||10;
		labelMargin=15;
		width=$element[0].clientWidth;
		height=$element[0].clientHeight;
		self.height=height;
		counts=_.countBy(data,$scope.myX);
		self.counts=counts;
		barWidth=width/_.size(counts);
		self.barWidth=barWidth;
		barPadding=$scope.barPadding||2;
		self.barPadding=barPadding;
		min=_.min(counts);
		max=_.max(counts);
		hScale=scale.linear().range([0,height                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ]).domain([min,max]);
		self.scale=scale;
		return data;
	};
	this.render($scope.data);
}])
.directive("myBarchart",function(){
	var labelId=0, descId=0;
	return {
	templateUrl: "components/d3/my-barchart/my-barchart-tpl.html",
	scope: {
		data: "=",
		myX: "@",
		myTitle: "@",
		myDesc: "@",
		margin: "@"
	},
	controller: "myBarchartCtrl",
	bintToController: "myBarchartCtrl",
	controllerAs: "barchart",
	link: function($scope,el,attrs,ctrl){
		$scope.labelId="barchartlabel"+labelId++;
		$scope.descId="barchartdescription"+descId++;
		var cleanData=$scope.$watch('data', function(newVals) {
			return ctrl.render(newVals);
		}, true);
		$scope.$on("$destroy",function(){cleanData();});
	}
};});
}());

/*
				link: function(scope, el) {
					// define render function
					scope.render = function(data){
						// setup variables

						//create the rectangles for the bar chart
						svg.selectAll("rect")
							.data(data)
							.enter()
								.append("rect")
								.attr("role","presentation")
								.attr("fill","teal")
								.on("click", function(d){
									return scope.onClick({item: d});
								})
								.attr("x",function(d,i){
									return margin+i*barWidth;
								})
								.attr("width",barWidth-barPadding)
								.attr("height",function(d){
									return yScale(d[scope.x]);
								})
								.attr("y",function(d){
									return margin+(height-yScale(d[scope.x]));
								});

						svg.selectAll("text")
							.data(data)
							.enter()
								.append("text")
								.attr("x",function(d,i){
									return margin+i*barWidth+(barWidth-barPadding)/2;
								})
								.attr("y", function(d){
									return margin+labelMargin+(height-yScale(d[scope.x]));
								})
								.text(function(d){
									return d[scope.label];
								})
								.attr("font-family","sans-serif")
								.attr("font-size","11px")
								.attr("text-anchor", "middle");


					};
				}
			};
		}]);

}());
					// on window resize, re-render d3 canvas
					window.onresize = function() {
						return scope.$apply();
					};
					var cleanResize=scope.$watch(function(){
							return angular.element(window)[0].innerWidth;
						}, function(){
							return scope.render(scope.data);
						}
					);
					scope.$on("$destroy",function(){cleanResize();});

*/

