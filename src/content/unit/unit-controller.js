module.exports=/*@ngInject*/function(unit,akzeptanz){
  this.unit=unit;
  this.akzeptanz=akzeptanz;
  this.text=[
    "keine Antwort",
    "stimme nicht zu",
    "stimme weniger zu",
    "stimme teilweise zu",
    "stimme eher zu",
    "stimme zu"
  ];
  akzeptanz.get();
};