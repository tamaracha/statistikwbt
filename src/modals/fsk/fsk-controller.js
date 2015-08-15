export default class FskCtrl{
  constructor(Restangular,$modalInstance){
    this.$modalInstance = $modalInstance;
    this.sessko = [];
  }
  ok(){
    return this.Restangular.all('fsk').post(this.sessko)
    .then(this.$modalInstance.close);
  }
  cancel(){
    return this.$modalInstance.dismiss();
  }
}
