export default function youtubeDirective($window, youtube, $http) {
  function link(scope, element) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let player;
    youtube.onReady(function() {
      player = setupPlayer(scope, element);
    });

    function setupPlayer(scope, element) {
      const options = {
        playerVars: {
          autoplay: 0,
          html5: 1,
          modestbranding: 1,
          showinfo: 0,
          controls: 1
        },
        height: scope.height,
        width: scope.width,
        videoId: scope.videoid,
        events: {
          onStateChange
        }
      };
      if (scope.list && scope.listType) {
        options.playerVars.list = scope.list;
        options.playerVars.listType = scope.listType;
        delete options.videoId;
      }
      if (scope.theme) {
        options.theme = scope.theme;
      }
      if (scope.color) {
        options.color = scope.color;
      }
      return new $window.YT.Player(element.children()[0], options);
    }

    function onStateChange(event) {
      const message = {
        time: player.getCurrentTime()
      };
      switch (event.data) {
        case $window.YT.PlayerState.PLAYING:
          message.state = 'PLAYING';
          break;
        case $window.YT.PlayerState.ENDED:
          message.state = 'ENDED';
          break;
        case $window.YT.PlayerState.UNSTARTED:
          message.state = 'NOT PLAYING';
          break;
        case $window.YT.PlayerState.PAUSED:
          message.state = 'PAUSED';
          break;
      }
      if (!message.state) {
        return;
      }
      if (scope.list && scope.listType) {
        message.type = 'list';
        message.listType = scope.listType;
        message.list = scope.list;
      } else {
        message.type = 'video';
        message.video = scope.videoid;
      }
      return $http.post('api/watches', message);
    }
  }
  return {
    restrict: 'E',
    scope: {
      height: '@',
      width: '@',
      videoid: '@',
      list: '@',
      listType: '@'
    },
    template: '<div></div>',
    link
  };
}
youtubeDirective.$inject = ['$window', 'youtube', '$http'];
