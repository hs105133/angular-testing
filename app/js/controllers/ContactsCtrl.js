angular.module("AddressBook")
	.controller("ContactsCtrl", function($scope, ContactService){
		$scope.contacts = [];
		ContactService.success(function(res){
			$scope.contacts = res;	
		});
	});