angular.module('emailSigs', []) 

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
			{value: 'Helvetica, Arial, sans-serif',			name: 'Arial'},
			{value: '"Verdana",Trebuchet MS, sans-serif',	name: 'Verdana'},
			{value: '"Courier", "courier new", monospace',	name: 'Monospace'},
			{value: 'Georgia, Times New Roman, serif',		name: 'Serif'},
		];

	});



function tableHTML() {
  $('input').blur(function() {
    var form 	= $('#sigWrapper table'),
    	result	= $('#result');

    result.find('textarea').text(form.html());
  
  });
}

$(window).load(function() {
	tableHTML();
});