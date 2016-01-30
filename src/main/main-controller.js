import _ from 'lodash';
export default /*@ngInject*/class MainCtrl{
  constructor($scope, $state,$stateParams,user,modals, meta){
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
    this.items = _.keyBy(meta,'_id');
    $scope.$watch('main.user.role', (val) => {
      this.items.author.active = val === 'author';
    });
  }
}
