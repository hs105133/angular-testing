describe("The Address Book App",function(){
	describe("Contact Service",function(){
		beforeEach(function(){
			module("AddressBook");
			inject(function($injector){
				contactService = $injector.get("ContactService");
				$httpBackend = $injector.get("$httpBackend");
			});
		});

		it("should return promise object", function(){
			chai.expect(contactService).to.be.an("object");			
		});

		it("should call the backend", function(){
			$httpBackend.expectGET("http://localhost:5000/contacts").respond(200, []);
			$httpBackend.flush();
		});
	});

	describe("The Contacts Controller", function(){
		beforeEach(function(){
			module("AddressBook");
			inject(function($injector, $rootScope){
				$scope = $rootScope.$new();
				$httpBackend = $injector.get("$httpBackend");
				contactService = $injector.get("ContactService");
				$controller = $injector.get("$controller");
			});
		});		

		it("should store array of contacts in scope", function(){
			$controller("ContactsCtrl", {$scope: $scope, ContactService: contactService});

			chai.assert.isArray($scope.contacts);
		});
	});

	describe("The Proper Case Filter", function(){
		beforeEach(function(){
			module("AddressBook");
			inject(function($injector, $rootScope){
				contactService = $injector.get("ContactService");
				propercase = $injector.get("$filter")("propercase");
			});
		});		

		it("should propercase a string", function(){
			chai.expect(propercase("vinay mourya")).to.equal("Vinay Mourya");
		});

		it("should take number and return string", function(){
			chai.expect(propercase(23)).to.equal("23");
		});

		it("throw error if input not string or number", function(){
			chai.assert.throws(function(){
				propercase(undefined);
			});
		});
	});

	describe("The Avatar directive", function(){
		beforeEach(function(){
			module("AddressBook");
		});

		it("should display capitalized 1st letter of name", function(){
			inject(function($compile, $rootScope){
				$rootScope.contact = {name: "arya singh"};
				var element = $compile("<avatar name='contact.name'></avatar>")($rootScope);
				$rootScope.$digest();
				var dirText = element.text().trim();
				chai.expect(dirText).to.equal("A");
			});
		});
	});
});