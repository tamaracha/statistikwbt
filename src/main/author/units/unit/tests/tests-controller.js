import _ from 'lodash';
export default /*@ngInject*/class TestsCtrl{
  constructor(tests,$stateParams, $http){
    this.$stateParams = $stateParams;
    this.tests = tests.data;
    this.$http = $http;
    this.newTest = this.newDefaults;
    this.error = null;
    this.fields = [{
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
          name: 'Single-Choice',
          value: 'single'
        },
        {
          name: 'Multiple-Choice',
          value: 'multiple'
        },
        {
          name: 'Eingabe',
          value: 'input'
        }],
        required: true
      }
    },
    {
      key: 'feedback_right',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Feedback (korrekt)',
        placeholder: 'Feedback für korrekte Beantwortung der Aufgabe'
      },
      hideExpression: 'model.type === "multiple"'
    },
    {
      key: 'feedback_wrong',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Feedback (inkorrekt)',
        placeholder: 'Feedback für inkorrekte Beantwortung der Aufgabe'
      },
      hideExpression: 'model.type === "multiple"'
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
              placeholder: 'Antwort',
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
              label: 'Elaboriertes Feedback',
              type: 'text',
              placeholder: 'Bei Single-Choice und Eingabe elaboriertes Feedback für diese Antwortoption, bei Multiple-Choice Feedback für korrekt und inkorrekt gewählte Option'
            }
          },
          {
            key: 'feedback_right',
            type: 'horizontalInput',
            templateOptions: {
              label: 'Elaboriertes Feedback (korrekt)',
              type: 'text',
              placeholder: 'Nur für Multiple-Choice, wird bei korrekter Wahl statt obigem Feedback angezeigt'
            }
          },
          {
            key: 'feedback_wrong',
            type: 'horizontalInput',
            templateOptions: {
              label: 'Elaboriertes Feedback (inkorrekt)',
              type: 'text',
              placeholder: 'Nur für Multiple-Choice, wird bei inkorrekter Wahl statt obigem Feedback angezeigt'
            }
          }
        ]
      }
    }];
  }
  get newDefaults(){
    return {
      type: 'single',
      choices: [],
      unit: this.$stateParams.unit
    };
  }
  create(){
    return this.$http.post('api/tests',this.newTest)
    .then(
      (data) => {
        this.tests.push(data);
        this.newTest = this.newDefaults;
        this.newTestForm.$setPristine();
      },
      (e) => {
        this.error = e;
      }
    );
  }
  update(){
    return this.$http.put('api/tests/'+this.selected._id, this.selected)
    .then(
      (res) => {
        this.selected = res.data;
        this.testForm.$setPristine();
      },
      (e) => {
        this.error = e;
      }
    );
  }
  remove(){
    return this.$http.delete('api/tests/'+this.selected)
    .then(
      () => {
        _.remove(this.tests,{_id: this.selected._id});
        this.selected = null;
      },
      (e) => {
        this.error = e;
      }
    );
  }
}
