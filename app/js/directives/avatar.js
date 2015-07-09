angular.module("AddressBook")
	.directive("avatar", function(){
		return {
			scope:{
				name: "="
			},	
			template: '<span class="avatar"> {{ name[0] | propercase }}</span>'
		};
	});