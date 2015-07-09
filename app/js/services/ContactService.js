angular.module("AddressBook")
	.service("ContactService", function($http){
		return $http.get("http://localhost:5000/contacts");
	});