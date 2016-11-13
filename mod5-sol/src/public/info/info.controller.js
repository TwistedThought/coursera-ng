(function () {
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SaveService', 'userInfo', 'ApiPath'];
function InfoController(SaveService, userInfo, ApiPath) {
	var infoCtrl = this;
	infoCtrl.user = userInfo;
	infoCtrl.basePath = ApiPath;
}

})();