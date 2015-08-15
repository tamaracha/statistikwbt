import login from './login';
import fsk from './fsk';
import akzeptanz from './akzeptanz';

export default /*@ngInject*/class modals{
  constructor($modal){
    this.$modal = $modal;
  }
  login(){
    return this.$modal.open(login);
  }
  fsk(){
    return this.$modal.open(fsk);
  }
  akzeptanz(){
    return this.$modal.open(akzeptanz);
  }
}
