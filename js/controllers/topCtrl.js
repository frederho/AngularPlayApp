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