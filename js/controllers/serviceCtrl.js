angular.module('angularPlay.services')
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