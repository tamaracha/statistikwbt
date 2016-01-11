export default /*@ngInject*/class RegisterCtrl{
  constructor(user,$state){
    this.user = user;
    this.$state = $state;
    this.formOptions = {
      formState: {
        showPassword: false
      }
    };
    this.model = {
      role: 'user',
      profile: {}
    };
    this.fields = [{
      key: 'email',
      type: 'horizontalInput',
      templateOptions: {
        label: 'E-Mail-Adresse',
        type: 'email',
        required: true,
        maxlength: 50,
        placeholder: 'name@provider.com'
      },
      ngModelAttrs: {
        'available': {
          value: 'user-check'
        }
      },
      validation: {
        messages: {
          'userCheck': '$viewValue+" wurde schon registriert"'
        }
      },
      modelOptions: {
        updateOn: 'default blur',
        debounce: {
          blur: 0,
          default: 500
        }
      }
    },
    {
      key: 'password',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Passwort',
        type: 'password',
        minlength: 8,
        required: true,
        placeholder: 'unlösbar'
      },
      expressionProperties: {
        'templateOptions.type': 'formState.showPassword ? "text" : "password"'
      }
    },
    {
      key: 'showPassword',
      model: this.formOptions.formState,
      type: 'horizontalCheckbox',
      templateOptions: {
        label: 'Passwort einblenden'
      }
    },
    {
      key: 'nickname',
      model: 'model.profile',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Nickname',
        maxlength: 20
      }
    }];
  }
  register(){
    return this.user.create(this.model)
    .then(
      () => {
        return this.user.authenticate(this.model,false)
        .then(() => {
          this.$state.go('^.home');
        });
      },
      (e) => {
        this.error = e;
      }
    );
  }
}
