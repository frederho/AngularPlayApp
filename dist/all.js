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
angular.module('angularPlay')
.config(['$provide', function ($provide) {
    $provide.decorator('$exceptionHandler',
                function () {
                    return function (exception, cause) {
                        $delegate(exception, cause);
                        var errorService = $injector.get("ErrorService");
                        errorService.addError(exception.message);
                    }
                });
}]);
angular.module('angularPlay.controllers', []);
angular.module('angularPlay.controllers')
 	.controller('ControllerAs', [function(){
		var vm = this;

		vm.value = "Some text";
	}]);
angular.module('angularPlay.controllers')
	.controller('DirectiveCtrl', [function() {
		//Controller with ControllerAs and viewmodel pattern
		var vm = this;
		vm.updateModel = updateModel;
		vm.entries = [
			{
				title: "Item1",
				value: 1
			},
			{
				title: "Item2",
				value: 2
			},
			{
				title: "Item3",
				value: 3
			}
		];

		vm.text = "This is the description that we can edit";

		function updateModel(text) {
			vm.text = text;
		}
	}]);


angular.module('angularPlay.controllers')
	.controller('NestedCtrl', ['$scope', function($scope){
	}]);
angular.module('angularPlay.controllers')
	.controller('NestedCtrlAs', [function(){
		vm = this;
	}]);
angular.module('angularPlay.controllers')
	.controller('NgifCtrl', [function(){
		var vm = this;
		vm.show = true;
	}]);
angular.module('angularPlay.controllers')
	.controller('ServiceCtrl', 
		['HelloWorldService', 
		function(HelloWorldService){
			var vm = this;
			
			vm.inputValue = '';

			vm.ctrlValue = "Hey hey";
			
			//One line functions can be declared up top like this.
			vm.sayHello = HelloWorldService.sayHello;
			vm.resetValue = HelloWorldService.resetValue;
						
			vm.updateServiceValue = updateServiceValue;

			//Gather all initial logic that will run on startup in a function
			acticate();

			function updateServiceValue() {
				HelloWorldService.set(vm.inputValue);	
			};
			
			function acticate() {
				vm.inputValue = HelloWorldService.get();
			};



	}]);
angular.module('angularPlay.controllers')
	.controller('TopCtrl', 
		['ErrorService', 
		function(ErrorService){
			var vm = this;
			vm.errorList = ErrorService.currentErrors;
			vm.breakStuff = breakStuff;

			function breakStuff(){
				throw new ReferenceError("AUUUUUUU");
			};
	}]);
angular.module('angularPlay.controllers')
 	.controller('UsingScope', ['$scope', function($scope){
		$scope.value = "Some text";
}]);
//Declaration of the directive module. Every new directive will refere to this one. 
angular.module('angularPlay.directives', []);

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
				},
				link: function(scope, element, attr, ngModel) {
	                //console.log(scope, element, attr);
	                //console.log(ngModel);
				}
			};
		});

angular.module('angularPlay.directives')
	//basic example of a directive using a template
	.directive('helloWorld', function () {
		return {
			//restrict the way the directive can be used. In this case Element, attribute, and class
			restrict: 'EAC',
			template: "<h3>Hello World</h3>"
		};
	});
angular.module('angularPlay.directives')
	.directive("logDirective", function() {
		return {
			link: function () {
				console.log("Hello");
		}};
	});
angular.module('angularPlay.directives')
	.directive('repeatDirective', function() {
		return {
			templateUrl: '/templates/repeat.html'
		};
	});
/**
* angularPlay.services Module
*
* Description
*/
angular.module('angularPlay.services', []);
angular.module('angularPlay.services')
	.factory('ErrorService', ['$timeout', function($timeout){
		var currentErrors = [];
		
		var service = {
			"addError": addError,
			"currentErrors": currentErrors
		};
		
		return service;

		function addError(description) {
			var error = { 
					type: "error",
					message: description
				};
			currentErrors.push(error);
			$timeout(function() {
				removeError(error);
			}, 5000);
		};

		function removeError(error){
			var index = currentErrors.indexOf(error);
			if (index !== -1){
				currentErrors.splice(index, 1);
			};
		}
	}]);
angular.module('angularPlay.services')
	.factory('HelloWorldService', 
		[function(){
			
			var initialValue = "Hi there"
			//gather all initial logic in a function to make it easy to access
			activate();
			//Expose the callable members( interface of the service) at the top
			var service = {
				//using "" prevent conflicts with reserved key words
				"get": getValue,
				"reset": resetValue,
				"sayHello": sayHello,
				"set": updateValue
			};

			//Returning a service object allows us to be explicit about what should be available outside the service 
			return service;

			//Using function declaratin will make sure that the function is hoisted so it is available in the entire scope. Order does not matter
			function getValue() {
				return alertValue;
			};

			function resetValue() {
				alertValue = initialValue;
			}

			function sayHello() {
				alert(alertValue);
			};

			function updateValue(value) {
				alertValue = value;
			};

			function activate(){
				resetValue();
			};
	}]);