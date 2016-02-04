export default class PageController{
  constructor(page){
    this.data = page.data;
  }
}
PageController.$inject = ['page'];
