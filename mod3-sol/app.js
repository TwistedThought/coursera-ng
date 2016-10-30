(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	var ddo = {
	    templateUrl: 'items.html',
	    scope: {
	      ctrl: '<found',
	      onRemove: '&'
	    }	
	};
	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
	var ctrl = this;
	ctrl.searchTerm = undefined;

	ctrl.find = function(searchTerm) {
		ctrl.on = true;
		
		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

		promise.then(function(result) {

			ctrl.found = result;
			ctrl.on = false;

		}).catch(function(error) {
			console.log('Something wrong');
			ctrl.on = false;
		});
		

	};

	ctrl.removeItem = function (itemIndex) {
    
	    ctrl.found.splice(itemIndex, 1);
	    
	};
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
		return $http({
		      method: "GET",
		      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		    }).then(function (result) {
		    // process result and only keep items that match
		    var items = result.data.menu_items;
		    
		    var foundItems = [];
		    for (var i = 0; i < items.length; i++) {
		    	var desc = items[i].description;
		    
		    	if (desc.toLowerCase().indexOf(searchTerm) !== -1) {

		    		foundItems.push(items[i]);
		    	}
		    }
		    
		    // return processed items
		    return foundItems;
		});
	}

}


})();