var SubsetArgumentsService = function () {
  this.myFunction = function () {
    var args = Array.prototype.slice.call(arguments),
        argsLength = args.length,
        minLength = 5,
        hasMinLength = argsLength >= minLength;

    console.log('args = ', args, ' ; argsLength = ', argsLength);
    console.log('hasMinLength = ', hasMinLength);

    if (argsLength > 0) {
      var startIndex = hasMinLength ? 2 : 0,
          endIndex = hasMinLength ? 5 : argsLength,
          result = Array.prototype.slice.call(args, startIndex, endIndex);

      console.log('startIndex = ', startIndex, ' ; endIndex = ', endIndex);

      console.log('result = ', result);

      return result.toString();

    } else {
      console.log('Too few arguments.');
      return 'Too few arguments';
    }
  };
};

starpointApp.service('subsetArguments.service', [SubsetArgumentsService]);
