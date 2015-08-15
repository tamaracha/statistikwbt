// wrappers
export const wrappers = [
  {
    name: 'horizontalBootstrapLabel',
    template: require('./wrappers/horizontal-bootstrap-label.jade')
  },
  {
    name: 'bootstrapHasError',
    template: require('./wrappers/bootstrap-has-error.jade'),
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
    template: require('./types/horizontal-checkbox.jade'),
    wrapper: 'bootstrapHasError'
  },
  {
    name: 'horizontalMultiCheckbox',
    extends: 'multiCheckbox',
    template: require('./types/horizontal-multi-checkbox.jade'),
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalMultiCheckboxInline',
    extends: 'horizontalMultiCheckbox',
    template: require('./types/horizontal-multi-checkbox-inline.jade')
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
    template: require('./types/horizontal-markdown-area.jade')
  },
  {
    name: 'horizontalRadio',
    extends: 'radio',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalRadioInline',
    extends: 'horizontalRadio',
    template: require('./types/horizontal-radio-inline.jade')
  },
  {
    name: 'repeatSection',
    template: require('./types/repeat-section.jade'),
    controller: require('./types/repeat-section-controller.js')
  },
  {
    name: 'horizontalTypeahead',
    extends: 'horizontalInput',
    template: require('./types/horizontal-typeahead.jade'),
    defaultOptions(options) {
      const typeahead = options.templateOptions.typeahead || `option[to.valueProp || 'value'] as option[to.labelProp || 'name'] for option in to.options | filter : $viewValue | limitTo: 8`;
      return {
        ngModelAttrs: {
          [typeahead]: {
            value: 'typeahead'
          },
          'options.templateOptions.tws': {
            value: 'typeahead-wait-ms'
          },
          'options.templateOptions.tml': {
            value: 'typeahead-min-length'
          }
        }
      };
    }
  },
  {
    name: 'horizontalRating',
    template: require('./types/horizontal-rating.jade'),
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
