var LangMessages = {
  "common": {
    "pageHeading": "Programming Quiz: Starpoint - Sapient",
    "goHome": "Go Home"
  },
  "exceptionDecorator": {
    "pageTitle": "Exception Decorator",
    "question": "In angular, whenever there is an angular exception, I want to print the following message before the exception: 'There has been an error: the error is:' and the following message after the exception: 'Please call helpdesk'.",
    "infoMessage": "Please check the console.",
    "exceptionText": "Help! I'm sick...",
    "greeting": "Hello, How are you?",
    "replyBtnTxt": "Reply"
  },
  "subsetArguments": {
    "pageTitle": "Subset of Arguments",
    "question": "Create a function that takes n number of arguments (unlimited arguments) and returns the arguments from number 3 to 5. The use of loops is not allowed. Here is how I will call this function: myFunction(1,2,3,4,5,6,7,8,9); It should print: 3,4,5.",
    "execFnBtnTxt": "Execute Function",
    "argumentsLbl": "Arguments"
  }

};

starpointApp.constant('langMessages', LangMessages);
