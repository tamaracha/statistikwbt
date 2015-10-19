// wrappers
export const wrappers = [
  {
    name: 'horizontalBootstrapLabel',
    templateUrl: require('./wrappers/horizontal-bootstrap-label.jade')
  },
  {
    name: 'bootstrapHasError',
    templateUrl: require('./wrappers/bootstrap-has-error.jade'),
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
    templateUrl: require('./types/horizontal-checkbox.jade'),
    wrapper: 'bootstrapHasError'
  },
  {
    name: 'horizontalMultiCheckbox',
    extends: 'multiCheckbox',
    templateUrl: require('./types/horizontal-multi-checkbox.jade'),
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalMultiCheckboxInline',
    extends: 'horizontalMultiCheckbox',
    templateUrl: require('./types/horizontal-multi-checkbox-inline.jade')
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
    templateUrl: require('./types/horizontal-markdown-area.jade')
  },
  {
    name: 'horizontalRadio',
    extends: 'radio',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalRadioInline',
    extends: 'horizontalRadio',
    templateUrl: require('./types/horizontal-radio-inline.jade')
  },
  {
    name: 'repeatSection',
    templateUrl: require('./types/repeat-section.jade'),
    controller: require('./types/repeat-section-controller.js')
  },
  {
    name: 'horizontalTypeahead',
    extends: 'horizontalInput',
    templateUrl: require('./types/horizontal-typeahead.jade'),
    defaultOptions(options) {
      const typeahead = options.templateOptions.typeahead || `option[to.valueProp || 'value'] as option[to.labelProp || 'name'] for option in to.options | filter : $viewValue | limitTo: 8`;
      return {
        ngModelAttrs: {
          [typeahead]: {
            value: 'uib-typeahead'
          },
          'options.templateOptions.tws': {
            value: 'uib-typeahead-wait-ms'
          },
          'options.templateOptions.tml': {
            value: 'uib-typeahead-min-length'
          }
        }
      };
    }
  },
  {
    name: 'horizontalRating',
    templateUrl: require('./types/horizontal-rating.jade'),
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
