//Angular app is defined here, the dependencies needed are listed in the []. 
//Make sure to reference to this module without the [].
angular.module('angularPlay', ['angularPlay.controllers', 'angularPlay.directives', 'ui.router', 'angularPlay.services'])
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('usingScope');
		$stateProvider
			.state('directives', {
				url: "/directives",
				templateUrl: '../templates/directives.html'
			})
			.state('controllerAs', {
				url: "/controllerAs",
				templateUrl: '../templates/controllerAs.html',
				controller: 'ControllerAs',
				controllerAs: 'controller',
				cache: false
			})
			.state('usingScope', {
				url: "/usingScope",
				templateUrl: '../templates/usingScope.html',
				controller: 'UsingScope'
			})
			.state('services', {
				url: "/services",
				templateUrl: '../templates/services.html',
				controller: 'ServiceCtrl',
				controllerAs: 'service',
				cache: false
			})
			.state('ngif', {
				url: "/ngif",
				templateUrl: '../templates/ngif.html',
				controller: 'NgifCtrl',
				controllerAs: 'ngif'
			});

	}]);