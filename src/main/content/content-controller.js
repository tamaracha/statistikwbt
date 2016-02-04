export default class ContentCtrl{
  constructor(page){
    this.data = page.data;
  }
}
ContentCtrl.$inject = ['page'];
