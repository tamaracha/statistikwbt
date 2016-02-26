export default class DatasetsController{
  constructor(){
    this.data = {
      collection: 'views',
      format: 'csv',
      delimiter: ',',
      headers: true
    };
    this.fields = [
      {
        key: 'collection',
        type: 'horizontalRadioInline',
        templateOptions: {
          label: 'Datensatz',
          options: [
            {
              name: 'Clicks',
              value: 'views'
            },
            {
              name: 'Video-Events',
              value: 'watches'
            }
          ]
        }
      },
      {
        key: 'format',
        type: 'horizontalRadioInline',
        templateOptions: {
          label: 'Format',
          options: [
            {
              name: 'CSV',
              value: 'csv'
            },
            {
              name: 'JSON',
              value: 'json'
            }
          ]
        }
      },
      {
        key: 'pretty',
        type: 'horizontalCheckbox',
        hideExpression: 'model.format === "csv"',
        templateOptions: {
          label: 'Datei formatieren'
        }
      },
      {
        key: 'delimiter',
        type: 'horizontalRadioInline',
        hideExpression: 'model.format === "json"',
        templateOptions: {
          label: 'Spaltentrennzeichen',
          options: [
            {
              name: 'Komma',
              value: ','
            },
            {
              name: 'Semikolon',
              value: ';'
            }
          ]
        }
      },
      {
        key: 'headers',
        type: 'horizontalCheckbox',
        hideExpression: 'model.format === "json"',
        templateOptions: {
          label: 'Kopfzeile'
        }
      },
      {
        key: 'quoteColumns',
        type: 'horizontalCheckbox',
        hideExpression: 'model.format === "json"',
        templateOptions: {
          label: 'Zellen in Anführungszeichen'
        }
      },
      {
        key: 'includeEndRowDelimiter',
        type: 'horizontalCheckbox',
        hideExpression: 'model.format === "json"',
        templateOptions: {
          label: 'Leerzeile am Ende der Datei'
        }
      }
    ];
  }
}
