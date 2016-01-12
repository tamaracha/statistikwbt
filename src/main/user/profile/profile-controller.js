export default /*@ngInject*/class ProfileController{
  constructor(api, user, $scope, jsonpatch){
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
