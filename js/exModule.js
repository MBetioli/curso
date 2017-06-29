(function(){


	angular.module("customServiceApp")
	.factory("stringTransit", function(){

		//Privado: inicia a variável que vai transitar a mensagem.
		var message = '';

		function getMessage(){
			return message;
		}

		function editMessage(value){
			message = value;
		}

		return{
			get:getMessage,
			set:editMessage
		}


	});



})();