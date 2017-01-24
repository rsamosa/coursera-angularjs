(function() {
 'use strict'

 angular.module('ShoppingListCheckOff', [])
   .controller('ToBuyController', ToBuyController)
   .controller('AlreadyBoughtController', AlreadyBoughtController)
   .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

 ToBuyController.$inject = ['ShoppingListCheckOffService'];
 function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function(itemIndex) {
       ShoppingListCheckOffService.buyItem(itemIndex);
    };

    toBuy.isItemsToBuy = function() {
       return ShoppingListCheckOffService.isItemsToBuy();
    }
 }

 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService) {
 	var alreadyBought = this;

 	alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

 	alreadyBought.isItemsAlreadyBought = function() {
 	   return ShoppingListCheckOffService.isItemsAlreadyBought();
 	}

 }

 function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [{"name": "apples", "quantity": 6}, {"name": "bread", "quantity": 1}, {"name": "steak", "quantity": 1}, 
                      {"name": "lemons", "quantity": 3}, {"name": "advocado", "quantity": 2}, {"name": "pears", "quantity": 6}];
    var alreadyBoughtItems = [];

    service.getToBuyItems = function() {
    	return toBuyItems;
    };

    service.getAlreadyBoughtItems = function() {
    	return alreadyBoughtItems;
    };

    service.buyItem = function(itemIndex) {
       alreadyBoughtItems.push(toBuyItems[itemIndex]);
       toBuyItems.splice(itemIndex, 1);
    };

    service.isItemsToBuy = function() {
    	return toBuyItems.length != 0;
    };

    service.isItemsAlreadyBought = function() {
    	return alreadyBoughtItems.length != 0;
    };

 }

})();