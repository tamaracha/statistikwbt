export default /*@ngInject*/class DownloadController{
  constructor(units,lodash){
    this.units = units.plain();
    this.lodash = lodash;
    this.data = {
      contents: ['body'],
      format: 'rtf'
    };
    this.show = {
      units: false,
      contents: false
    };
    this.fields = [{
      key: 'units',
      type: 'horizontalMultiCheckbox',
      templateOptions: {
        label: 'Kapitel',
        options: units,
        valueProp: '_id',
        labelProp: 'title'
      }
    },
    {
      key: 'contents',
      type: 'horizontalMultiCheckboxInline',
      templateOptions: {
        label: 'Inhalte',
        options: [{
          name: 'Kerntexte',
          value: 'body'
        },
        {
          name: 'Beispiele',
          value: 'examples'
        },
        {
          name: 'Extras',
          value: 'extras'
        }]
      }
    },
    {
      key: 'format',
      type: 'horizontalRadioInline',
      templateOptions: {
        label: 'DateiFormat',
        options: [{
          name: 'MS Word',
          icon: 'file-word-o',
          value: 'docx'
        },
        {
          name: 'RTF',
          icon: 'file-text-o',
          value: 'rtf'
        },
        {
          name: 'Epub (E-Book)',
          icon: 'book',
          value: 'epub'
        },
        {
          name: 'Markdown',
          icon: 'file-text-o',
          value: 'markdown'
        },
        {
          name: 'LaTeX',
          icon: 'file-code-o',
          value: 'latex'
        }]
      }
    }];
  }
  selectUnits(val){
    this.data.units = val ? this.lodash.map(this.units,'_id') : [];
  }
  selectContents(val){
    this.data.contents = val ? ['body','examples','extras'] : [];
  }
  
}
