import Topic from './topic-controller';
import topic from './topic.html';
export
default
function(kind) {
  switch (kind) {
    case 'topic':
      return {
        templateUrl: topic,
        controller: Topic,
        controllerAs: 'add'
      };
  }
}
