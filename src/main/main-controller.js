export default class MainCtrl{
  constructor(){
    this.ngModelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
  }
}
