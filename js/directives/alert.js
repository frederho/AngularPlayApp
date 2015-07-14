angular.module('angularPlay.directives')
	.directive('alert',
		function() {
			return {
				//Define if the directive should be available as element(E)/attribute(A)/class(C)/comment(M) etc
				restrict: 'EA',
				templateUrl: '/templates/alert.html'
			};
		});
