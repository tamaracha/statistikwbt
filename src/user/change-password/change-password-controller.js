export default /*@ngInject*/class ChangePasswordController{
  constructor(user, api, $uibModalInstance){
    this.user = user;
    this.api = api;
    this.$uibModalInstance = $uibModalInstance;
    this.data = {};
    this.formOptions = {
      formState: {
        showPasswords: false
      }
    };
    this.fields = [
      {
        key: 'old',
        type: 'horizontalInput',
        templateOptions: {
          type: 'password',
          label: 'Altes Passwort',
          required: true,
          placeholder: 'unlösbar',
          minlength: 8
        },
        expressionProperties: {
          'templateOptions.type': 'formState.showPasswords ? "text" : "password"'
        }
      },
      {
        key: 'new',
        type: 'horizontalInput',
        templateOptions: {
          type: 'password',
          label: 'Neues Passwort',
          required: true,
          placeholder: 'unlösbar',
          minlength: 8
        },
        expressionProperties: {
          'templateOptions.type': 'formState.showPasswords ? "text" : "password"'
        }
      },
      {
        key: 'showPasswords',
        model: this.formOptions.formState,
        type: 'horizontalCheckbox',
        templateOptions: {
          label: 'Passwörter einblenden'
        }
      }
    ];
  }
  change(){
    return this.api.putUsersBy_idPassword({
      _id: this.user._id,
      data: this.data
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
