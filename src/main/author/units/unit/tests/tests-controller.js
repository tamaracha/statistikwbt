import _ from 'lodash';
export default /*@ngInject*/class TestsCtrl{
  constructor(tests,$stateParams){
    this.$stateParams = $stateParams;
    this.tests = tests;
    this.newTest = this.newDefaults;
    this.error = null;
    this.newFields = [{
      type: 'horizontalMarkdownArea',
      key: 'text',
      templateOptions: {
        label: 'Aufgabenstamm',
        required: true,
        placeholder: 'Frage oder Aussage'
      }
    },
    {
      type: 'horizontalRadioInline',
      key: 'type',
      templateOptions: {
        label: 'Aufgabenformat',
        options: [{
          name: 'Multiple-Choice',
          value: 'multiple'
        },
        {
          name: 'Single-Choice',
          value: 'single'
        },
        {
          name: 'Eingabe',
          value: 'input'
        }],
        required: true
      }
    },
    {
      type: 'repeatSection',
      key: 'choices',
      templateOptions: {
        btnText: 'Antwortoption hinzufügen',
        label: 'Antwortoptionen',
        fields: [
          {
            type: 'horizontalInput',
            key: 'text',
            templateOptions: {
              type: 'text',
              label: 'Antwort',
              placeholder: 'Lösung',
              required: true
            }
          },
          {
            key: 'correct',
            type: 'horizontalCheckbox',
            templateOptions: {
              label: 'Korrekt'
            }
          },
          {
            key: 'feedback',
            type: 'horizontalInput',
            templateOptions: {
              label: 'Feedback',
              type: 'text',
              required: true,
              placeholder: '*lob*'
            }
          }
        ]
      }
    },
    {
      key: 'tags',
      template: '<tags-input ng-model="model[options.key]"></tags-input>',
      wrapper: ['horizontalBootstrapLabel','bootstrapHasError'],
      templateOptions: {
        label: 'Tags'
      }
    }];
    this.fields = [{
      key: '_id',
      type: 'horizontalStatic',
      templateOptions: {
        label: 'ID'
      }
    }];
    this.fields = this.fields.concat(this.newFields);
  }
  get newDefaults(){
    return {
      tags: [],
      choices: [],
      unit: this.$stateParams.unit
    };
  }
  create(){
    return this.tests.post(this.newTest)
    .then((data) => {
      this.tests.push(data);
      this.newTest = this.newDefaults;
      this.newTestForm.$setPristine();
    }, (e) => {
      this.error = e;
    });
  }
  update(){
    return this.selected.clone().put()
    .then((data) => {
      _.merge(this.selected,data);
      this.testForm.$setPristine();
    },(e) => {
      this.error = e;
    });
  }
  remove(){
    return this.selected.remove()
    .then(() => {
      _.remove(this.tests,{_id: this.selected._id});
      this.selected = null;
    },(e) => {
      this.error = e;
    });
  }
}
