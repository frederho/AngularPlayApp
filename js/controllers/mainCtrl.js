angular.module('angularPlay.controllers')
	.controller('mainCtrl', [function() {
		var vm = this;

		vm.entries = [
			{
				title: "Hei",
				value: 1
			},
			{
				title: "Hei",
				value: 1
			},
			{
				title: "Hei",
				value: 1
			}
		];

		vm.update = function(stuff) {

			return "fish";
		};
	}]);