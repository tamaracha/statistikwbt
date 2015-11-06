import _ from 'lodash';
export default /*@ngInject*/class MainCtrl{
  constructor($state,$stateParams,user,modals, meta){
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.user = user;
    this.modals = modals;
    this.ngModelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.meta = meta;
    this.items = _.indexBy(meta,'_id');
  }
}
