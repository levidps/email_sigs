angular.module('emailSigs', []) 

	.controller('formFields', function() {

		var input = this;

		input.fields = [
			{text: 'name'},
			{text: 'position'},
			{text: 'phone'},
			{text: 'email'}
		];

	});


$(window).load(function() {
  $('input').blur(function() {
    var form 	= $('#sigWrapper table'),
    	result	= $('#result');

    result.find('textarea').text(form.html());
  
  });
});