//Angular app is defined here, the dependencies needed are listed in the []. 
//Make sure to reference to this module without the [].
angular.module('angularPlay', ['angularPlay.controllers', 'angularPlay.directives', 'ui.router'])
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('directives');
		$stateProvider
			.state('directives', {
				url: "/directives",
				templateUrl: '../templates/directives.html'
			})
			.state('controllerAs', {
				url: "/controllerAs",
				templateUrl: '../templates/controllerAs.html',
				controller: 'ControllerAs',
				controllerAs: 'controller'
			})
			.state('usingScope', {
				url: "/usingScope",
				templateUrl: '../templates/usingScope.html',
				controller: 'UsingScope'
			});

	}]);