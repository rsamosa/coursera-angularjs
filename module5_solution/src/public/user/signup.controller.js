(function(){
'use strict'

angular.module('public')
  .controller('SignupController', SignupController);

SignupController.$inject = ['UserService']
function SignupController(UserService) {
	var signup = this;
    
    signup.invalidMenuItem = false;
    signup.userSaved = false;

	signup.submit = function() {
	   var promise = UserService.getFavouriteDish(signup.user.favDishShortName);

	   promise.then(function(menuItem){
	   	  signup.invalidMenuItem = false;
	   	  signup.user.favDish = menuItem;
	   	  signup.saveUser(signup.user);
	   }).catch(function(error) {
	   	  console.log('Failed to retrieve menu item: ', error);
	   	  signup.invalidMenuItem = true;
	   });
	};

	signup.saveUser = function(user) {
		UserService.saveUser(user);
		signup.userSaved = true;
	} 
}
})();