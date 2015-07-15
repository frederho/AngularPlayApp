angular.module('angularPlay.directives')
	.directive("myDirective", function() {
		return function () {
			console.log("Hello");
		};
	});