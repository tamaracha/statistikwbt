import _ from 'lodash';
export default class TestsCtrl{
  constructor(tests,$stateParams, $http, jsonpatch, $scope){
    const modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.$stateParams = $stateParams;
    this.tests = tests.data;
    this.$http = $http;
    this.jsonpatch = jsonpatch;
    this.newTest = this.newDefaults;
    this.error = null;
    this.patches = [];
    this.fields = [{
      type: 'horizontalMarkdownArea',
      modelOptions,
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
      modelOptions,
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
      modelOptions,
      templateOptions: {
        label: 'Feedback (korrekt)',
        placeholder: 'Feedback für korrekte Beantwortung der Aufgabe'
      },
      hideExpression: 'model.type === "multiple"'
    },
    {
      key: 'feedback_wrong',
      type: 'horizontalInput',
      modelOptions,
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
            modelOptions,
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
            modelOptions,
            templateOptions: {
              label: 'Korrekt'
            }
          },
          {
            key: 'feedback',
            type: 'horizontalInput',
            modelOptions,
            templateOptions: {
              label: 'Elaboriertes Feedback',
              type: 'text',
              placeholder: 'Bei Single-Choice und Eingabe elaboriertes Feedback für diese Antwortoption, bei Multiple-Choice Feedback für korrekt und inkorrekt gewählte Option'
            }
          },
          {
            key: 'feedback_right',
            type: 'horizontalInput',
            modelOptions,
            templateOptions: {
              label: 'Elaboriertes Feedback (korrekt)',
              type: 'text',
              placeholder: 'Nur für Multiple-Choice, wird bei korrekter Wahl statt obigem Feedback angezeigt'
            }
          },
          {
            key: 'feedback_wrong',
            type: 'horizontalInput',
            modelOptions,
            templateOptions: {
              label: 'Elaboriertes Feedback (inkorrekt)',
              type: 'text',
              placeholder: 'Nur für Multiple-Choice, wird bei inkorrekter Wahl statt obigem Feedback angezeigt'
            }
          }
        ]
      }
    }];
    function watcher(){
      if(!$scope.tests.selected){return;}
      return _.omit($scope.tests.selected, 'updatedAt');
    }
    $scope.$watch(watcher, (val, oldVal) => {
      if(val === oldVal || !val || !oldVal){return;}
      this.patches = jsonpatch.compare(oldVal,val);
      if(this.patches.length === 0){return;}
      const config = {
        method: 'PATCH',
        url: 'api/tests/'+this.selected._id,
        data: this.patches,
        headers: {'if-unmodified-since': this.selected.updatedAt}
      };
      return $http(config)
      .then(
        (res) => {
          this.patches = [];
          this.selected.updatedAt = res.headers('last-modified');
          this.error = null;
          this.testForm.$setPristine();
          return res;
        },
        (e) => {
          this.error = e;
          return e;
        }
      );
    }, true);
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
      (res) => {
        this.tests.push(res.data);
        this.newTest = this.newDefaults;
        this.newTestForm.$setPristine();
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
  onChange(){
    if(!this.selected){return;}
    return this.$http.get('api/tests/'+this.selected._id)
    .then(
      (res) => {
        _.assign(this.selected, res.data);
        return res;
      },
      (e) => {
        this.error = e;
        return e;
      }
    );
  }
}
TestsCtrl.$inject = ['tests', '$stateParams', '$http', 'jsonpatch', '$scope'];
