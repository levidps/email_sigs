angular.module('components', [])

  .controller('formFields', function() {

    var input = this;

    input.fields = [
      {text: 'name'},
      {text: 'position'},
      {text: 'phone'},
      {text: 'email'}
    ];

    input.bizFields = [
      {text: 'name'},
      {text: 'location'},
      {text: 'phone'},
      {text: 'fax'},
      {text: 'email'},
      {text: 'website'}
    ];

    input.fonts = [
      {value: 'Helvetica, Arial, sans-serif',     name: 'Arial'},
      {value: '"Verdana",Trebuchet MS, sans-serif', name: 'Verdana'},
      {value: '"Courier", "courier new", monospace',  name: 'Monospace'},
      {value: 'Georgia, Times New Roman, serif',    name: 'Serif'},
    ];

  });