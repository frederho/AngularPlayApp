describe('Unit Test', function(){

	beforeEach(module('angularPlay.controllers'));
	
    //Using controller as with VM means that we do not have to work with scope.
    //any property we expect to find in the controller scope is assigned to the controller directly
	var controllerAs;
	beforeEach(inject(function($controller) {
		controllerAs = $controller('ControllerAs', {});
	}));

    it('should contain a list of entries', function () {
    	expect(controllerAs.value).toBe("Some text");
    });

});