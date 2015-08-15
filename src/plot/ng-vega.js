import vg from 'vega';
export default /*@ngInject*/function ngVegaDirective(){
  function link(scope,el){
    let view;
    function parse(spec){
      if(spec){
        vg.parse.spec(spec,function(chart){
          const obj = {
            el: el[0],
            renderer: scope.renderer || 'svg'
          };
          if(scope.data){
            obj.data = scope.data;
          }
          view = chart(obj).update();
        });
      }
    }
    parse(scope.spec);
    const specClean = scope.$watch('spec',parse,true);
    function updateData(data){
      if(data){
        if(view){
          view.data(data).update().render();
        }
        else{
          parse(scope.spec);
        }
      }
    }
    const dataClean = scope.$watch('data',updateData,true);
    function updateRenderer(renderer){
      if(renderer){
        if(view){
          view.renderer(renderer).update();
        }
        else{
          parse(scope.spec);
        }
      }
    }
    const rendererClean = scope.$watch('renderer',updateRenderer);
    scope.$on('$destroy',function(){
      specClean();
      dataClean();
      rendererClean();
    });
  }
  return {
    restrict: 'E',
    scope: {
      data: '=vegaData',
      spec: '=vegaSpec',
      renderer: '=vegaRenderer'
    },
    link
  };
}
