angular.module('angularPlay.controllers')
	.controller('DirectiveCtrl', [function() {
		//Controller with ControllerAs and viewmodel pattern
		var vm = this;

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
	}]);

