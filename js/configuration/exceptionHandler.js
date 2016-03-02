angular.module('angularPlay')
.config(['$provide', function ($provide) {
    $provide.decorator('$exceptionHandler',
                function () {
                    return function (exception, cause) {
                        $delegate(exception, cause);
                        var errorService = $injector.get("ErrorService");
                        errorService.addError(exception.message);
                    }
                });
}]);