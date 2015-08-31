import fsk from './fsk';
import akzeptanz from './akzeptanz';

export default /*@ngInject*/class modals{
  constructor($modal){
    this.$modal = $modal;
  }
  fsk(){
    return this.$modal.open(fsk);
  }
  akzeptanz(){
    return this.$modal.open(akzeptanz);
  }
}
