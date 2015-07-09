angular.module("AddressBook")
	.filter("propercase", function(){
		return function(input){
			var type = typeof input;
			if(type !== 'string' && type !== 'number') throw new Error("not a valid type");
			return input.toString().split(" ").map(function(word){
				return word[0].toUpperCase() + word.substring(1);
			}).join(" ");
		};
	});