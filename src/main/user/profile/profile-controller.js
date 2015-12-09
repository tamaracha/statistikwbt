export default /*@ngInject*/class ProfileController{
  constructor(api, user, $scope, jsonpatch){
    function getSubjects(val){
      return api.getSubjects({
        search: val
      });
    }
    const modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.patches = [];
    this.error = null;
    this.fields = [
      {
        key: 'profile.nickname',
        type: 'horizontalInput',
        modelOptions,
        templateOptions: {
          type: 'text',
          label: 'Nickname',
          maxlength: 20
        }
      },
      {
        key: 'profile.age',
        type: 'horizontalInput',
        modelOptions,
        templateOptions: {
          type: 'number',
          label: 'Alter',
          min: 20,
          max: 100,
          step: 1
        }
      },
      {
        key: 'profile.sex',
        type: 'horizontalRadioInline',
        modelOptions,
        templateOptions: {
          label: 'Geschlecht',
          options: [
            {
              name: 'männlich',
              value: 'male'
            },
            {
              name: 'weiblich',
              value: 'female'
            }
          ]
        }
      },
      {
        key: 'profile.subject',
        type: 'horizontalTypeahead',
        modelOptions,
        templateOptions: {
          type: 'text',
          label: 'Studiengang',
          options: getSubjects,
          tml: 3,
          tws: 300,
          typeahead: 'subject.name for subject in to.options($viewValue)'
        }
      }
    ];
    $scope.$watch('main.user.data',(val,oldVal) => {
      this.patches = jsonpatch.compare(oldVal, val);
      if(this.patches.length === 0){
        return;
      }
      return api.patchUsersBy_id({
        _id: user._id,
        patches: this.patches
      })
      .then(
        () => {
          this.patches = [];
        },
        (e) => {
          this.error = e;
        }
      );
    },true);
  }
}
