(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['ApiPath', '$http', 'SaveService'];
function RegistrationController(ApiPath, $http, SaveService) {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
    var promise = reg.getDish(reg.user.dish);
    promise.then(function(response) {
    	reg.message = "";
    	SaveService.saveUser(reg.user.firstname, reg.user.lastname, reg.user.email, reg.user.phone, reg.user.dish, response);
    	reg.message_saved = "Your information has been saved";
    })
    .catch(function(error) {
    	reg.message = "No such menu number exists";
    })
  };

  reg.getDish = function (short_name) {

    return $http.get(ApiPath + '/menu_items/'+ short_name +'.json').then(function (response) {
        return response.data;
    });
  };
}

})();