"use strict";
module.exports=/*@ngInject*/function(){
  return function(title){
    if(!title){return;}
    var splitInput,out,temp;
    splitInput=title.split(" ");
    out="";
    temp="";
    _.forEach(splitInput,function(word){
      temp=word.charAt(0).toUpperCase()+word.slice(1);
      out=out+temp;
    });
    return out;
  };
};