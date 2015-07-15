angular.module('angularPlay.directives')
	.directive('basic',
		function() {
			return {
				//Define if the directive should be available as element(E)/attribute(A)/class(C)/comment(M) etc
				restrict: 'EA',
				//TemplateUrl is used to link to a separate html document
				templateUrl: '/templates/basic.html',
				//setting up a scope to take a value from 
				scope: {
					//binding to a string value
					value: '@'
				}
			};
		});
