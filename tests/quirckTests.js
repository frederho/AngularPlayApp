describe('Javascript quircks', function() {

	it('variable name declarations are hoisted to the top of the scope', function() {
		function HoistedNameDeclaration() {
			console.log("var1 name is declared, but the value is not yet set", var1);
			var var1 = 1;
		};
		HoistedNameDeclaration();

		function ExplicitNameDeclaration() {
			var var1;
			console.log("this function is treated exactly like the the function above", var1);
			var1 = 1;
		};
		ExplicitNameDeclaration();
		console.log("===================================================================================")
	});

	it('function declarations are hoisted to the top of the scope', function () {
		console.log('bar declaration is hoisted to the top of the scope', bar);
		expect(bar).toBeDefined();

		function bar() {

		};
	});

	it('Recommended bindable member declaration format', function () {
	console.log('hello is set to bar, and bar function is hoisted, so hello is a callable function', bar);

		var hallo = bar;
		expect(hallo).toEqual(bar);


		function bar() {
		};
		console.log("===================================================================================")

	});
	it('functions declared as variables are treated as variables', function () {
		console.log('functions declared as variables are not hoisted', foo);
		expect(foo).not.toBeDefined(); 

		var foo = function () {

		};
		console.log("===================================================================================")

	});

	it('== does type conversion to compare variables', function () {
		var number = 3;
		var string = '3';

		var typeCheck = function (var1, var2) {
			return number == string ? true : false;
		};

		console.log('comparison with "==" does type conversion to compare ')
		console.log(number+" (number)" + " == " + string+" (string)" + " is " + typeCheck(number, string));
		console.log('undefined == null is ' + typeCheck(undefined, null));
		console.log('-1 == false is ' + typeCheck(-1, false));
		console.log('NaN == undefined is ' + typeCheck(Number.NaN, undefined));
		expect(typeCheck(number,string)).toBeTruthy();
		console.log("===================================================================================")

	});




	it('strict comparison of === does not do type conversion', function () {
		var number = 3;
		var string = '3';

		var strictComparison = function (var1, var2) {
			return (var1 === var2) ? true: false;
		};
		var theAnswer = strictComparison(number, string);
		console.log('strict comparison with "===" does not do type conversion');
		console.log(number+" (number)" + " === " + string+" (string)" + " is " + theAnswer);
		console.log('undefined === null is ', strictComparison(undefined, null));
		expect(theAnswer).toBeFalsy();
		console.log("===================================================================================")


	});

	it('Javascript use function scope not blockscope', function() {
		console.log('Javascript use function scope, not blockscope.  Declared variables are overwritten when in the same scope');
		var name = 'Navn1';
		if(name){
			var name= 'navn2';
			console.log(name);
		}		
		console.log(name);

		console.log('A new scope is created within a function and functions can be used to keep variables out of the global scope');
		//IIFE
		(function(){
			var name = 'navn3';
			console.log(name);
		})();
		console.log(name);
		console.log("===================================================================================")
		
	});
});