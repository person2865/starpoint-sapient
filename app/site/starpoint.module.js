var starpointApp = angular.module('starpointApp', ["ui.router"]);

starpointApp.config(function($provide, $stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/home");

  $stateProvider
      .state('home', {
        url: "/home",
        controller: "starpointMain.controller",
        templateUrl: "site/starpointMain.controller.tpl.html"
      })
      .state('question1', {
        url: "/question1",
        controller: "exceptionDecorator.controller",
        templateUrl: "site/exceptionDecorator/exceptionDecorator.controller.tpl.html"
      })
      .state('question2', {
        url: "/question2",
        controller: "subsetArguments.controller",
        templateUrl: "site/subsetArguments/subsetArguments.controller.tpl.html"
      });


  //Exception Decorator
  $provide.decorator("$exceptionHandler", ['$delegate', function($delegate) {
    return function(exception, cause) {
      exception = 'There has been an error: the error is: \n\n' + exception + '\n\nPlease call help-desk.\n';
      cause = '';
      $delegate(exception, cause);
    };
  }]);
});
