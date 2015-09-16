describe('Unit Test', function(){

	beforeEach(module('angularPlay.controllers'));
	
	var mainCtrl;
	beforeEach(inject(function($controller) {
		mainCtrl = $controller('MainCtrl', {});
	}));

    it('can get an instance of my factory', function() {
        expect(true).toBeTruthy();
    });

    it('should contain a list of entries', function () {
    	expect(mainCtrl.entries).toBeDefined();
    });

    it('should contain a list with 3 entries', function () {
    	expect(mainCtrl.entries.length).toEqual(3);
    });
});