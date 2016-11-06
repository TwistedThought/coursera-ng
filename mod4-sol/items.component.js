(function () {
'use strict';

angular.module('data')
.component('itemsCat', {
	templateUrl: 'templates/items.html',
	bindings: {
		items: '<'
	}
});

})();