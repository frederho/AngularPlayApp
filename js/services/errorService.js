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