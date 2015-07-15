angular.module('angularPlay.directives')
	//basic example of a directive using a template
	.directive('helloWorld', function () {
		return {
			//restrict the way the directive can be used. In this case Element, attribute, and class
			restrict: 'EAC',
			template: "<h3>Hello World</h3>"
		};
	});