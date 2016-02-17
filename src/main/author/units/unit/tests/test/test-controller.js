export default class TestController{
  constructor(test, $http, jsonpatch, $scope){
    this.$http = $http;
    this.test = test.data;
    this.lastModified = test.headers('last-modified');
    this.error = null;
    this.patches = [];
    this.fields = [{
      type: 'horizontalMarkdownArea',
      modelOptions: this.modelOptions,
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
      modelOptions: this.modelOptions,
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
      modelOptions: this.modelOptions,
      templateOptions: {
        label: 'Feedback (korrekt)',
        placeholder: 'Feedback für korrekte Beantwortung der Aufgabe'
      },
      hideExpression: 'model.type === "multiple"'
    },
    {
      key: 'feedback_wrong',
      type: 'horizontalInput',
      modelOptions: this.modelOptions,
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
        btnText: 'Antwort hinzufügen',
        label: 'Antwortoptionen',
        fields: [
          {
            type: 'horizontalMarkdownArea',
            key: 'text',
            modelOptions: this.modelOptions,
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
            modelOptions: this.modelOptions,
            templateOptions: {
              label: 'Korrekt'
            }
          },
          {
            key: 'feedback',
            type: 'horizontalInput',
            modelOptions: this.modelOptions,
            templateOptions: {
              label: 'Elaboriertes Feedback',
              type: 'text',
              placeholder: 'Bei Single-Choice und Eingabe elaboriertes Feedback für diese Antwortoption, bei Multiple-Choice Feedback für korrekt und inkorrekt gewählte Option'
            }
          },
          {
            key: 'feedback_right',
            type: 'horizontalInput',
            modelOptions: this.modelOptions,
            templateOptions: {
              label: 'Elaboriertes Feedback (korrekt)',
              type: 'text',
              placeholder: 'Nur für Multiple-Choice, wird bei korrekter Wahl statt obigem Feedback angezeigt'
            }
          },
          {
            key: 'feedback_wrong',
            type: 'horizontalInput',
            modelOptions: this.modelOptions,
            templateOptions: {
              label: 'Elaboriertes Feedback (inkorrekt)',
              type: 'text',
              placeholder: 'Nur für Multiple-Choice, wird bei inkorrekter Wahl statt obigem Feedback angezeigt'
            }
          }
        ]
      }
    }];
    $scope.$watch('test.test', (val, oldVal) => {
      if(!val || val === oldVal){return;}
      this.patches = jsonpatch.compare(oldVal,val);
      if(this.patches.length === 0){return;}
      const config = {
        method: 'PATCH',
        url: 'api/tests/'+this.test._id,
        data: this.patches,
        headers: {'if-unmodified-since': this.lastModified}
      };
      return $http(config)
      .then(
        (res) => {
          this.patches = [];
          this.lastModified = res.headers('last-modified');
          this.error = null;
          this.form.$setPristine();
        },
        (e) => {
          this.error = e;
        }
      );
    }, true);
  }
  get modelOptions(){
    return {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
  }
  static get $inject(){
    return ['test', '$http', 'jsonpatch', '$scope'];
  }
}
