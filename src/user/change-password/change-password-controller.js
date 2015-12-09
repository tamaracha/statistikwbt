export default /*@ngInject*/class ChangePasswordController{
  constructor(api, user,$uibModalInstance){
    this.api = api;
    this.user = user;
    this.$uibModalInstance = $uibModalInstance;
    this.data = {};
    this.fields = [
      {
        key: 'new',
        type: 'horizontalInput',
        templateOptions: {
          type: 'password',
          label: 'Neues Passwort',
          required: true,
          placeholder: 'unlösbar',
          minlength: 8
        }
      }
    ];
  }
  change(){
    return this.api.patchUsersBy_id({
      _id: this.user._id,
      patches: [
        {
          op: 'replace',
          path: '/password',
          value: this.data.new
        }
      ]
    })
    .then(
      (data) => {
        return this.$uibModalInstance.close(data);
      },
      (e) => {
        this.message = e.data;
        return e;
      }
    );
  }
  cancel(){
    this.$uibModalInstance.dismiss('cancel');
  }
}
