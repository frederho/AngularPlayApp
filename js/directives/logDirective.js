angular.module('angularPlay.directives')
	.directive("logDirective", function() {
		return {
			templateUrl: "templates/logExample.html",
			link: function () {
				console.log("Hello");
		}};
	});