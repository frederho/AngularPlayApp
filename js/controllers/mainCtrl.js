angular.module('angularPlay.controllers')
	.controller('mainCtrl', [function() {
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
	}]);