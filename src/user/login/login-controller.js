export default class LoginController{
  constructor(user,$uibModalInstance){
    this.user = user;
    this.$uibModalInstance = $uibModalInstance;
    this.data = {};
    this.formOptions = {
      formState: {
        username: 'kennung'
      }
    };
    this.loginFields = [{
      key: 'username',
      model: this.formOptions.formState,
      type: 'horizontalRadioInline',
      templateOptions: {
        label: 'Anmelden mit',
        options: [{
          name: 'S- oder G-Kennung',
          value: 'kennung'
        },
        {
          name: 'E-Mail',
          value: 'email'
        }]
      }
    },
    {
      key: 'kennung',
      type: 'horizontalInput',
      templateOptions:  {
        type: 'text',
        label: 'S- oder G-Kennung',
        placeholder: 'sx1234',
        required: true,
        maxlength: 6
      },
      validation: {
        messages: {
          'userCheck': '$viewValue+" ist kein registrierter Benutzer"',
          'pattern': '"keine gültige S- oder G-Kennung"'
        }
      },
      hideExpression: 'formState.username !== "kennung"',
      ngModelAttrs: {
        'exists': {
          value: 'user-check'
        }
      },
      modelOptions: {
        updateOn: 'default blur',
        debounce: {default: 500, blur: 0}
      }
    },
    {
      key: 'email',
      type: 'horizontalInput',
      templateOptions:  {
        type: 'email',
        label: 'E-Mail',
        required: true,
        placeholder: 'name@provider.com',
        maxlength: 50
      },
      hideExpression: 'formState.username !== "email"',
      ngModelAttrs: {
        'exists': {
          value: 'user-check'
        }
      },
      modelOptions: {
        updateOn: 'default blur',
        debounce: {default: 500, blur: 0}
      }
    },
    {
      key: 'password',
      type: 'horizontalInput',
      templateOptions: {
        type: 'password',
        label: 'Passwort',
        required: true,
        placeholder: 'unlösbar',
        minlength: 8
      }
    }];
  }
  login(){
    return this.user.authenticate(this.data, this.formOptions.formState.username, true)
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
LoginController.$inject = ['user', '$uibModalInstance'];
