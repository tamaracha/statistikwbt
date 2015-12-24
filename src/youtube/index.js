import angular from 'angular';
import youtubeDirective from './youtube-directive';
import youtube from './youtube-service';

export default angular.module('wbt.youtube', [])
.constant('YT_event', {
  STOP:            0, 
  PLAY:            1,
  PAUSE:           2,
  STATUS_CHANGE:   3
})
.directive('youtube',youtubeDirective)
.factory('youtube',youtube)
.name;
