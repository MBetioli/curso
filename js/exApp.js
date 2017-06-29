(function () {


	var app = angular.module("customServiceApp",[]);


	app.controller("Secao1Ctrl",["$scope", "stringTransit", function($scope, stringTransit){

		$scope.pegarMensagem = function(){
			return stringTransit.get();			
		}

	}]);
	

	app.controller("Secao2Ctrl",["$scope", "stringTransit", function($scope, stringTransit){

		$scope.pegarMensagem = function(){
			return stringTransit.get();			
		}

	}]);
	

	app.controller("ServicoSetterCtrl",["$scope", "stringTransit", function($scope, stringTransit){


		$scope.setarMensagem = function(){
			stringTransit.set($scope.novaMensagem);
			$scope.novaMensagem = '';
		};

		

	}]);
	
	
})();