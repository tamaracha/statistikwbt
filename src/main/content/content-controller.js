export default class ContentCtrl{
  constructor(units, meta){
    this.units = units.data;
    this.meta = meta.data;
  }
}
ContentCtrl.$inject = ['units', 'meta'];
