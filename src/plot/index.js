import angular from 'angular';
import ngVegaDirective from './ng-vega';
import jsonDirective from './json-directive';
import opencpuDirective from './opencpu-directive';
import graph from './graph/graph';

export default angular.module('plot',[])
.constant('opencpu','https://public.opencpu.org/ocpu/')
.directive('ngVega',ngVegaDirective)
.directive('json',jsonDirective)
.directive('opencpu',opencpuDirective)
.directive('graph',graph)
.name;
