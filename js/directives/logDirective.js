angular.module('angularPlay.directives')
	.directive("logDirective", function() {
		return {
			link: function () {
				console.log("Hello");
		}};
	});