export default /*@ngInject*/class RegisterCtrl{
  constructor(user,$state,$q,Restangular){
    function getSubjects(val){
      return Restangular.all('subjects').getList({search: val});
    }
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
        maxlength: 30,
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
    },
    {
      key: 'age',
      model: 'model.profile',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Alter',
        required: true,
        type: 'number',
        placeholder: 20,
        min: 0,
        max: 100,
        step: 1
      }
    },
    {
      key: 'sex',
      model: 'model.profile',
      type: 'horizontalRadioInline',
      templateOptions: {
        label: 'Geschlecht',
        required: true,
        options: [{
          name: 'männlich',
          value: 'male'
        },
        {
          name: 'weiblich',
          value: 'female'
        }]
      }
    },
    {
      key: 'subject',
      model: 'model.profile',
      type: 'horizontalTypeahead',
      templateOptions: {
        label: 'Studiengang',
        required: true,
        type: 'text',
        placeholder: 'hier Studiengang eingeben und auswählen',
        options: getSubjects,
        tml: 3,
        tws: 300,
        typeahead: 'subject.name for subject in to.options($viewValue)'
      }
    },
    {
      key: 'reasons',
      model: 'model.profile',
      type: 'horizontalMultiCheckbox',
      templateOptions: {
        label: 'Registrierungsgründe',
        options: [{
          name: 'Interesse für das Thema',
          value: 'interesse'
        },
        {
          name: 'Langeweile, Zeitvertreib, zufällig reingestolpert',
          value: 'langeweile'
        },
        {
          name: 'Vor- oder Nachbereitung für Klausur/Vorlesung',
          value: 'klausur'
        }]
      }
    }];
  }
  register(){
    return this.user.create(this.model)
    .then(() => {
      return this.user.authenticate(this.model,false)
      .then(() => {
        this.$state.go('^.home');
      });
    },(e) => {
      this.error = e;
    });
  }
}
