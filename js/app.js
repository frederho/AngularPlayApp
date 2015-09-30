//Angular app is defined here, the dependencies needed are listed in the []. 
//Make sure to reference to this module without the [].
angular.module('angularPlay', ['angularPlay.controllers', 'angularPlay.directives', 'ui.router'])
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('directives');
		$stateProvider
			.state('directives', {
				url: "/directives",
				templateUrl: '../templates/directives.html',
			})		
	}]);