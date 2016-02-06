export default class WbtController{
  constructor(store, $stateParams){
    this.ngModelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    store.find($stateParams.wbt)
    .then(data => this.wbt = data);
  }
  static get $inject(){
    return ['store', '$stateParams'];
  }
}
