import angular from 'angular';
import youtubeDirective from './youtube-directive';
import youtube from './youtube-service';

export default angular.module('wbt.youtube', [])
.directive('youtube',youtubeDirective)
.factory('youtube',youtube)
.name;
