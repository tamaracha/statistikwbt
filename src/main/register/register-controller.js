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
      key: user.username,
      type: 'horizontalInput',
      ngModelAttrs: {
        'available': {
          value: 'user-check'
        }
      },
      validation: {
        messages: {
          'userCheck': '$viewValue+" wurde schon registriert"',
          'pattern': '"keine gültige S- oder G-Kennung"'
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
    if(user.username === 'email'){
      this.fields[0].templateOptions = {
        label: 'E-Mail-Adresse',
        type: 'email',
        required: true,
        maxlength: 50,
        placeholder: 'name@provider.com'
      };
    }
    if(user.username === 'kennung'){
      this.fields[0].templateOptions = {
        label: 'S- oder G-Kennung',
        type: 'text',
        required: true,
        maxlength: 6,
        placeholder: 'sx1234'
      };
    }
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
