export default /*@ngInject*/class LoginController{
  constructor(user,$uibModalInstance){
    this.user = user;
    this.$uibModalInstance = $uibModalInstance;
    this.data = {};
    this.loginFields = [{
      key: user.username,
      type: 'horizontalInput',
      validation: {
        messages: {
          'userCheck': '$viewValue+" ist kein registrierter Benutzer"',
          'pattern': '"keine gültige S- oder G-Kennung"'
        }
      },
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
    if(user.username === 'email'){
      this.loginFields[0].templateOptions = {
        type: 'email',
        label: 'E-Mail',
        required: true,
        placeholder: 'name@provider.com',
        maxlength: 50
      };
    }
    if(user.username === 'kennung'){
      this.loginFields[0].templateOptions = {
        type: 'text',
        label: 'S- oder G-Kennung',
        placeholder: 'sx1234',
        required: true,
        maxlength: 6
      };
    }
  }
  login(){
    return this.user.authenticate(this.data,true)
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
