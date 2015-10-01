angular.module('angularPlay.controllers')
	.controller('TopCtrl', 
		['ErrorService', 
		function(ErrorService){
			var vm = this;
			vm.errorList = ErrorService.currentErrors;
			vm.breakStuff = breakStuff;

			function breakStuff(){
				console.log("Throw an error");
				throw new ReferenceError("this is fucked up");
			};
	}]);