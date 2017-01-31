(function() {
  'use strict'

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	 var menuSearch = this;

   menuSearch.searchTerm = "";
   menuSearch.found;
   menuSearch.findItems = function() {
      if (menuSearch.searchTerm == "") {
          menuSearch.found = [];
          return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(menuSearch.searchTerm);
      promise.then(function(items) {
         menuSearch.found = items;
      });
   };

   menuSearch.removeItem = function(index) {
      menuSearch.found.splice(index, 1);
   };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
   var service = this;

   service.getMatchedMenuItems = function(searchTerm) {
      return $http.get(ApiBasePath + "/menu_items.json")
                .then(
                  function(response) {
                     var foundItems = [];
                     var items = response.data.menu_items;
                     for (var i = 0; i < items.length; i++) {
                     	  if (items[i].description.indexOf(searchTerm) != -1) {
                    	  	 foundItems.push(items[i]);
                    	  }
                     }
                     return foundItems;
                  }
                )};
}

function FoundItemsDirective() {
	 return {
       restrict: "E",
       templateUrl: 'foundItems.html',
       scope: {
         	 foundItems: '<',
        	 onRemove: '&'
       },
       controller: 'FoundItemsDirectiveController as foundItemsCtrl',
       bindToController: true
	 };
}

 function FoundItemsDirectiveController() {
    var foundItemsCtrl = this;

    foundItemsCtrl.noMatchingItems = function() {
       return (foundItemsCtrl.foundItems != undefined && foundItemsCtrl.foundItems.length == 0);
    }
 }

})();
