(function(){

angular.module('public')
  .component('userDetails', {
  	 templateUrl: 'src/public/user/userdetails.html',
  	 bindings: {
  	 	user: '<'
  	 },
  	 controller: 'UserDetailsController'
  });
})();