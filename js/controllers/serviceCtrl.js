angular.module('angularPlay.services')
	.controller('ServiceCtrl', 
		['HelloWorldService', 
		function(HelloWorldService){
			var vm = this;
			
			vm.ctrlValue = "Hey hey";
			
			//One line functions can be declared up top like this.
			vm.inputValue = HelloWorldService.get();
			vm.sayHello = HelloWorldService.sayHello;
			vm.resetValue = HelloWorldService.resetValue;
			
			
			vm.updateServiceValue = updateServiceValue;


			function updateServiceValue() {
				HelloWorldService.set(vm.inputValue);	
			};
			



	}]);