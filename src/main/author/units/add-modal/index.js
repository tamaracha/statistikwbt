import Topic from './topic-controller';
import topic from './topic.jade';
export default function(kind){
  switch(kind){
  case 'topic':
    return {
      templateUrl: topic,
      controller: Topic,
      controllerAs: 'add'
    };
  }
}
