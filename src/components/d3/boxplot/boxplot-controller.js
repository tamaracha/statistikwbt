module.exports=/*@ngInject*/function(d3){
  this.width=800;
  this.height=400;
  this.margin={
    top: 30,
    bottom: 70,
    left: 50,
    right: 50
  };
  this.boxWidth=width-(margin.left+margin.right);
  this.boxHeight=height-(margin.top+margin.bottom);
  this.data=[];
};