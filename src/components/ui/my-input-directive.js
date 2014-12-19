module.exports=function(){
var uniqueId=0;
return {
	restrict: "AE",
	require: "^form",
	transclude: true,
	scope: {
		label: "@",
	},
	template:
		'<div data-ng-class="{\'has-error\': hasError, \'has-success\': hasSuccess}" class="form-group"><label class="col-xs-2 form-label" data-ng-bind="::label"></label><div data-ng-transclude class="col-xs-10"></div></div>',
	link: function(scope,el,attrs,c){
		var id,name,exp,invalid,valid,touched,hasError,hasSuccess;
		uniqueId++;
		id="input"+uniqueId;
		el.find("label").attr("for",id);
		name=el.find("input").attr("id",id).attr("name");
		exp=c.$name+"."+name;
		invalid=exp+".$invalid";
		valid=exp+".$valid";
		touched=exp+".$touched";
		hasError=scope.$parent.$watch(invalid+"&&"+touched,function(value){
			scope.hasError=value;
		});
		scope.$parent.$on("destroy",hasError());
		hasSuccess=scope.$parent.$watch(valid+"&&"+touched,function(value){
			scope.hasSuccess=value;
		});
		scope.$parent.$on("destroy",hasSuccess());
	}
};};