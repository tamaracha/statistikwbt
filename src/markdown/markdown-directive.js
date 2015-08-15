export default /*@ngInject*/function markdownDirective(markdown,$sanitize){
  function link(scope,el,attrs){
    function render(val){
      const html = markdown.render(val);
      const saneHtml = $sanitize(html);
      el.html(saneHtml);
      if(attrs.hasOwnProperty('mathJax')){
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, el[0]]); // eslint-disable-line
      }
    }
    render(scope.markdown || el.text());
    const clean = scope.$watch('markdown',render);
    scope.$on('$destroy',clean);
  }
  return {
    restrict: 'AE',
    scope: {
      'markdown': '='
    },
    link
  };
}
