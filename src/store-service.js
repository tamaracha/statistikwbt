const hideNetworkCommunication = response => response.data;
export default class Store{
  constructor($http){
    this.$http = $http;
  }
  static get $inject(){
    return ['$http'];
  }
  find(path){
    return this.$http.get('api/wbt/'+path)
    .then(hideNetworkCommunication);
  }
}
