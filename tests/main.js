describe('Unit Test', function(){

	beforeEach(module('angularPlay.controllers'));
	
    //Using controller as with VM means that we do not have to work with scope.
    //any property we expect to find in the controller scope is assigned to the controller directly
	var directiveCtrl;
	beforeEach(inject(function($controller) {
		directiveCtrl = $controller('DirectiveCtrl', {});
	}));

    it('should contain a list of entries', function () {
    	expect(directiveCtrl.entries).toBeDefined();
    });

    it('should contain a list with 3 entries', function () {
    	expect(directiveCtrl.entries.length).toEqual(3);
    });
});