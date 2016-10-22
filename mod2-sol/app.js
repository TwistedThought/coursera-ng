(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;
	toBuy.list = ShoppingListCheckOffService.getBuyList();
	toBuy.remove = function(index) {
		ShoppingListCheckOffService.replace(index);
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var bought = this;
	bought.list = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService() {
	var service = this;
	var toBuyList = [
		{ name: "cookies", quantity: 10 },
		{ name: "cola", quantity: 5 },
		{ name: "chair", quantity: 1 },
		{ name: "protein bars", quantity: 12 },
		{ name: "bananas", quantity: 7 }
	];
	var boughtList = [];

	service.getBuyList = function() {
		return toBuyList;
	};
	service.getBoughtList = function() {
		return boughtList;
	};

	service.replace = function(index) {
		boughtList.push(toBuyList[index]);
		toBuyList.splice(index, 1);
	}

}

})();