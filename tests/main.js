describe('Unit Test', function(){

	beforeEach(module('angularPlay.controllers'));
	
    //Using controller as with VM means that we do not have to work with scope.
    //any property we expect to find in the controller scope is assigned to the controller directly
	var mainCtrl;
	beforeEach(inject(function($controller) {
		mainCtrl = $controller('MainCtrl', {});
	}));

    it('should contain a list of entries', function () {
    	expect(mainCtrl.entries).toBeDefined();
    });

    it('should contain a list with 3 entries', function () {
    	expect(mainCtrl.entries.length).toEqual(3);
    });
});