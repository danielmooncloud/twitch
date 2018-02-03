function members($http) {

	this.users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
	
	
	this.getUser = (user) => {
		return $http.jsonp("https://wind-bow.gomix.me/twitch-api/users/" + user);
	}; 


	this.getStreams = (user) => {
		const config = {headers: {"Client-ID": "di3ur1s4mxgvhj4xoshs7jbf2midww0"}};
		return $http.get("https://api.twitch.tv/kraken/streams/" + user, config);
	};
}

export default members;
