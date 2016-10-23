var SubsetArgumentsController = function($scope, langMessages, subsetArgumentsService) {
  $scope.lang = langMessages;
  $scope.pageTitle = langMessages.subsetArguments.pageTitle;
  $scope.question = langMessages.subsetArguments.question;

  $scope.inputArgs = '3, 4, 5';

  $scope.result = null;

  $scope.handleExecFnClick = function () {
    var args = $scope.inputArgs.split(',');
    console.log(subsetArgumentsService);
    $scope.result = subsetArgumentsService.myFunction.apply($scope, args);
  };

};
starpointApp.controller('subsetArguments.controller', ['$scope', 'langMessages', 'subsetArguments.service', SubsetArgumentsController]);
