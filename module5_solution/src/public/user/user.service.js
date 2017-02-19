(function(){
'use strict'

angular.module('public')
  .service('UserService', UserService)
  .constant('ApiBasePath', 'https://rsamosa-course5.herokuapp.com');

UserService.$inject = ['$http', 'ApiBasePath'];
function UserService($http, ApiBasePath) {
	var service = this;

	service.user = null;

	service.getFavouriteDish = function(shortName) {
       return $http.get(ApiBasePath + '/menu_items/' + shortName + '.json')
                .then(function (response){
                	return response.data;
                });
	};

	service.saveUser = function(user) {
       this.user = user;
	};

	service.getUser = function() {
		return this.user;
	}
}
})();