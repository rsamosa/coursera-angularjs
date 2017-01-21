(function() {
'use strict';

angular.module("LunchChecker", [])
.controller("LunchCheckerController", LunchCheckerController);

LunchCheckerController.$inject = ["$scope"];
function LunchCheckerController($scope) {
   var lunchChecker = {
          menu: "",
          message: "",
          calcNoOfDishes: function() {
             return this.menu.split(",").length;
          },  
          checkTooMuch: function() {
             if (this.menu == "") {
                 this.message = "Please enter data first"; 
             } else if (this.calcNoOfDishes() <= 3) {
                 this.message = "Enjoy!";
             } else {
                 this.message = "Too much!";
             }
          }
       };
 
    $scope.lunchChecker = lunchChecker;
}

})();

