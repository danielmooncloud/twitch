function members($http) {

	this.users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
	
	
	this.getUser = (user, callback) => {
		$http.jsonp('https://wind-bow.gomix.me/twitch-api/users/' + user)
		  .then(callback)
		  .catch(console.log)
	} 

	this.getStreams = (user, callback) => {
		const config = {headers: {'Client-ID': 'di3ur1s4mxgvhj4xoshs7jbf2midww0'}};
		
		$http.get('https://api.twitch.tv/kraken/streams/' + user, config)
	  		.then(callback)
	  		.catch(console.log)
	} 

};

export default members;
