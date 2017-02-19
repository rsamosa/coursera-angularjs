(function(){
'use strict'

angular.module('public')
  .controller('UserDetailsController', UserDetailsController);

UserDetailsController.$inject = ['ApiPath'];
function UserDetailsController(ApiPath) {
   var userDetailsCtrl = this;

   userDetailsCtrl.apiPath = ApiPath;
}

})();