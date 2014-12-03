"use strict";
module.exports=/*@ngInject*/function(){
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
};