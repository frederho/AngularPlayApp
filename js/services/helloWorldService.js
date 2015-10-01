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