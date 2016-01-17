(function(){function download(it
/**/) {
var out='%Statistik für Jedermann\n%Tamara Cook\n';var arr1=it.units;if(arr1){var u,i1=-1,l1=arr1.length-1;while(i1<l1){u=arr1[i1+=1];out+='\n# '+(u.title)+'\n'+(u.description)+'\n';var arr2=u.topics;if(arr2){var t,i2=-1,l2=arr2.length-1;while(i2<l2){t=arr2[i2+=1];out+='\n## '+(t.title)+'\n'+(t.body)+'\n';} } out+='\n';} } return out;
}var itself=download, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {window.render=window.render||{};window.render['download']=itself;}}());