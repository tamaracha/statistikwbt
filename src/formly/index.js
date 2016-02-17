// wrappers
export const wrappers = [
  {
    name: 'horizontalBootstrapLabel',
    templateUrl: require('./wrappers/horizontal-bootstrap-label.html')
  },
  {
    name: 'bootstrapHasError',
    templateUrl: require('./wrappers/bootstrap-has-error.html'),
    overwriteOk: true
  }
];

// types
export const types = [
  {
    name: 'horizontalInput',
    extends: 'input',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalStatic',
    template: '<p class="form-control-static" ng-bind="model[options.key]"></p>',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError'],
    noFormControl: true
  },
  {
    name: 'horizontalCheckbox',
    extends: 'checkbox',
    templateUrl: require('./types/horizontal-checkbox.html'),
    wrapper: 'bootstrapHasError'
  },
  {
    name: 'horizontalMultiCheckbox',
    extends: 'multiCheckbox',
    templateUrl: require('./types/horizontal-multi-checkbox.html'),
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalMultiCheckboxInline',
    extends: 'horizontalMultiCheckbox',
    templateUrl: require('./types/horizontal-multi-checkbox-inline.html')
  },
  {
    name: 'horizontalTextarea',
    extends: 'textarea',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError'],
    defaultOptions: {
      ngModelAttrs: {
        json: {
          attribute: 'json',
          bound: 'json'
        }
      }
    }
  },
  {
    name: 'horizontalMarkdownArea',
    extends: 'horizontalTextarea',
    templateUrl: require('./types/horizontal-markdown-area.html')
  },
  {
    name: 'horizontalRadio',
    extends: 'radio',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalRadioInline',
    extends: 'horizontalRadio',
    templateUrl: require('./types/horizontal-radio-inline.html')
  },
  {
    name: 'repeatSection',
    templateUrl: require('./types/repeat-section.html'),
    controller: require('./types/repeat-section-controller').default
  },
  {
    name: 'horizontalTypeahead',
    extends: 'horizontalInput',
    templateUrl: require('./types/horizontal-typeahead.html'),
    defaultOptions(options) {
      const typeahead = options.templateOptions.typeahead || 'option[to.valueProp || "value"] as option[to.labelProp || "name"] for option in to.options | filter : $viewValue | limitTo: 8';
      return {
        ngModelAttrs: {
          [typeahead]: {
            value: 'uib-typeahead'
          },
          tws: {
            attribute: 'typeahead-wait-ms'
          },
          tml: {
            attribute: 'typeahead-min-length'
          }
        }
      };
    }
  },
  {
    name: 'horizontalRating',
    templateUrl: require('./types/horizontal-rating.html'),
    wrapper: ['bootstrapHasError'],
    defaultOptions: {
      noFormControl: true,
      ngModelAttrs: {
        'textValue': {
          attribute: 'aria-valuetext'
        },
        'label': {
          attribute: 'aria-label'
        }
      },
      expressionProperties: {
        'templateOptions.textValue': 'to.labels[$viewValue]'
      }
    }
  }
];
