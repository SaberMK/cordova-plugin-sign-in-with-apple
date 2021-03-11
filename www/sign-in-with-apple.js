exports.signin = function(arg0, success, error) {
  window.cordova.exec(success, error, "SignInWithApple", "signin", [arg0]);
};
