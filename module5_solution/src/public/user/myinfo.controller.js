(function(){
'use strict'

angular.module('public')
  .controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['user'];
function MyinfoController(user) {
    var myinfoCtrl = this;	

    myinfoCtrl.user = user;
}
})();