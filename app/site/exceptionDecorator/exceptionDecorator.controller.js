var ExceptionDecoratorController = function($scope, langMessages) {
  $scope.lang = langMessages;
  $scope.pageTitle = langMessages.exceptionDecorator.pageTitle;
  $scope.question = langMessages.exceptionDecorator.question;

  $scope.greeting = langMessages.exceptionDecorator.greeting;

  $scope.handleReplyBtnClick = function() {
    $scope.showMessage = true;

    throwException();
  };

  var throwException = function() {
    var up = langMessages.exceptionDecorator.exceptionText;
    throw up;
  };

};
starpointApp.controller('exceptionDecorator.controller', ['$scope', 'langMessages', ExceptionDecoratorController]);
