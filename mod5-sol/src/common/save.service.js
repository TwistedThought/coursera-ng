(function () {
'use strict';

angular.module('common')
.service('SaveService', SaveService);

function SaveService() {
	var service = this;
	service.user = {};
	service.saveUser = function(firstName, lastName, email, phone, dish, data) {
		service.user.firstName = firstName;
		service.user.lastName = lastName;
		service.user.email = email;
		service.user.phone = phone;
		service.user.dish = dish;
		service.user.item = data;
		
	};
	
};

})();