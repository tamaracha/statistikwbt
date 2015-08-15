class /*@ngInject*/RatingCtrl{
  constructor($scope,Restangular,$stateParams){
    $scope.rate = function(){
      const rating = {
        name: $scope.options.key,
        unit: $stateParams.unit,
        value: $scope.model[$scope.options.key]
      };
      return Restangular.all('ratings').post(rating);
    };
  }
}

export default /*@ngInject*/class akzeptanzCtrl{
  constructor($modalInstance,summary,Restangular,$stateParams){
    const labels = [
      'keine Antwort',
      'stimme nicht zu',
      'stimme weniger zu',
      'stimme teilweise zu',
      'stimme eher zu',
      'stimme zu'
    ];
    this.$modalInstance = $modalInstance;
    this.summary = summary;
    this.$stateParams = $stateParams;
    this.Comments = Restangular.all('comments');
    this.fields = [{
      key: 'motivation',
      type: 'horizontalRating',
      templateOptions: {
        label: 'Die Bearbeitung dieses Kapitels war für mich sehr motivierend, weiterzumachen viel mir leicht.',
        labels,
        onChange: 'rate()'
      },
      controller: RatingCtrl
    },
    {
      key: 'success',
      type: 'horizontalRating',
      templateOptions: {
        label: 'Ich habe das Gefühl, einiges über das thema dazugelernt zu haben.',
        labels,
        onChange: 'rate()'
      },
      controller: RatingCtrl
    },
    {
      key: 'usability',
      type: 'horizontalRating',
      templateOptions: {
        label: 'Die Webseite lässt sich gut bedienen und es ist klar, was ich als nächstes tun soll.',
        labels,
        onChange: 'rate()'
      },
      controller: RatingCtrl
    },
    {
      key: 'comment',
      type: 'horizontalTextarea',
      templateOptions: {
        label: 'Kommentar',
        placeholder: 'Ergänzungen, Kritik oder Anmerkungen, die du noch loswerden möchtest'
      }
    }];
  }
  ok(){
    return this.Comments.post({
      unit: this.$stateParams.unit,
      value: this.summary.comment
    })
    .then((data) => {
      this.$modalInstance.close(data);
    });
  }
  cancel(){
    return this.$modalInstance.dismiss('cancel');
  }
}
