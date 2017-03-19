var angular = require("angular");

angular.module("Twitch").service('members', ['$http', function($http) {

	this.users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
	
	const logError = function(err) {
    	console.log(err);
  	}
	
	this.getUsers = function(user, callback) {
		$http.jsonp('https://wind-bow.gomix.me/twitch-api/users/' + user)
		  .then(callback)
		  .catch(logError)
	} 

	this.getStreams = function(user, callback) {
		const config = {
			headers: {
				'Client-ID': 'di3ur1s4mxgvhj4xoshs7jbf2midww0'
	    	}
		};
		
		$http.get('https://api.twitch.tv/kraken/streams/' + user, config)
	  		.then(callback)
	  		.catch(logError)
	} 

}]);
