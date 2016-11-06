(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  var ctrl = this;
  console.log(ctrl);
  console.log(items);
  var item = items.menu_items;
  console.log(item);
  ctrl.items = item;
  var category = items.category;
  ctrl.category = category;
  
}

})();
