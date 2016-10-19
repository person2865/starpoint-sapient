function MainCtrlFn($scope) {
  $scope.greet = 'Hello, How are you?';

  $scope.triggerException = function() {
    var up = "I'm sick";
    throw up;
  }
}


var starpointApp = angular.module('starpointApp', []);
starpointApp.config(function($provide) {
  $provide.decorator("$exceptionHandler", ['$delegate', function($delegate) {
    return function(exception, cause) {
      exception = exception + '\nPlease call help-desk';
      $delegate(exception, cause);
    };
  }]);
});
starpointApp.controller('MainCtrl', ['$scope', MainCtrlFn]);
