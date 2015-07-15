angular.module('angularPlay.directives')
	.directive('bindingExample', function() {
        return {
            templateUrl: "/templates/bindingExample.html",
            require: "ngModel",
            scope: {
                value: "=",
                update : "&"
            }
        };
	});
