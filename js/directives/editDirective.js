
/*
Directive to update model. Both direct and indirectly. No validation 
*/
angular.module('angularPlay.directives')
	.directive('spsEdit',
		function() {
			return {
				restrict: 'EA',
				// if we use ngModel, we can manipulate the parent scopes model
				require: 'ngModel',
				templateUrl: '/templates/editExample.html',
				scope: {
					ngModel: "=", // two way binding
					update: "&", // function
					value: "@text" //naming attributes for tag
				}
			};
		});
