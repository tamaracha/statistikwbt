module.exports=/*@ngInject*/function($state){
	return {
		restrict: "A",
		scope: {
			state: "@",
			menuText: "@",
			icon: "@"
		},
		template: 
			'<a ui-sref="{{state}}"><span data-ng-show="icon" data-ng-class="icon" aria-hidden="true"></span><span data-ng-bind="menuText"></span></a>',
		link: function(scope,el){
			var state=$state.get(scope.state).data;
			if(!scope.menuText){scope.menuText=state.menuText;}
			if(!scope.icon&&state.icon){
				scope.icon="glyphicon "+state.icon;
			}
			el.attr("data-ui-sref-active","active");
		}
	};
};