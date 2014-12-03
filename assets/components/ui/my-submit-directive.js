module.exports=function(){return {
	transclude: true,
	require: "^form",
	scope: {value: "@"},
	template: '<div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" class="btn" ng-value="::value" ng-class="{\'btn-primary\': primary, \'btn-danger\': danger}"/></div></div>',
	link: function(scope,el,attrs,c){
		var name=c.$name;
		scope.$parent.$watch(name+".$valid",function(value){
			scope.primary=value;
		});
		scope.$parent.$watch(name+".$invalid",function(value){
			scope.danger=value;
		});
	}
};};