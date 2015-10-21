import _ from 'lodash';
export default /*@ngInject*/class NewController{
  constructor($scope,$stateParams){
    this.image = _.find($scope.images.images,{_id: $stateParams.image});
    this.template = `<figure>\n<img src="/api/images/${this.image.name}"/>\n<figcaption>Beispielunterschrift</figcaption>\n</figure>`;
  }
}
