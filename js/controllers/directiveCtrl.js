angular.module('angularPlay.controllers')
	.controller('DirectiveCtrl', [function() {
		//Controller with ControllerAs and viewmodel pattern
		var vm = this;

		//by setting bindable members to named functions, we make sure that they are available at the top of the controller scope
		vm.consoleText = consoleText;
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
		//by named functions are always hoisted to the top of the scope
		function consoleText() {
			console.log(vm.text);
		}

		function updateModel(text) {
			vm.text = text;
		}
	}]);

