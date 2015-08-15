export default /*@ngInject*/class MainCtrl{
  constructor($state,$stateParams,user,modals){
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
  }
}
