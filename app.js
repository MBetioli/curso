(function(){

	//criando o modulo
	var app = angular.module('customServiceApp',[]);




	app.controller('Secao1Ctrl',['$scope', '$rootScope', function($scope, $rootScope){

		$scope.total = 0;

		$scope.incrementarValorTotalEm = function(add){
			
			$scope.total += add;

			$rootScope.$broadcast('updateValue',{currentValue:$scope.total});

		};

	}]);



	app.controller('Secao2Ctrl',['$scope', function($scope){

		$scope.total = 0;
		$scope.$on('updateValue', function(event, data){
			$scope.total = data.currentValue;

		});
	}]);



//Controlers
/*
Secao1Ctrl
Secao2Ctrl
*/


})();