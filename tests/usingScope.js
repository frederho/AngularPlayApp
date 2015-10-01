describe('Unit Test', function(){

	beforeEach(module('angularPlay.controllers'));

	//Using scope create a dependency on scope and $rootScope
	var scope;
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();		
		usingScope = $controller('UsingScope', { $scope: scope});
	}));

    it('should contain a list of entries', function () {
    	expect(scope.value).toBe("Some text");
    });

});