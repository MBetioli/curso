(function () {


	var app = angular.module("customServiceApp",[]);


	app.controller("Secao1Ctrl",["$scope", function($scope){

	}]);
	

	app.controller("Secao2Ctrl",["$scope", function($scope){

	}]);
	

	app.controller("ServicoSetterCtrl",["$scope", function($scope){

		$scope.setarMensagem = function(){
			alert('lalal');
		};

	}]);
	
	


})();