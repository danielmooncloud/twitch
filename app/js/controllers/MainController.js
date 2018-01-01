

const MainController = ($scope, members) => {

	$scope.onlineUsers = [];
	$scope.offlineUsers = [];
	$scope.invalid = [];

	$scope.users = members.users;

	$scope.state = (online, offline) => {
		$scope.online = online;
		$scope.offline = offline;
	}

	// This function needs to be curried to pass the name of the user to the invalid array
	// Since it won't be on the returned obeject.
	const formatUserData = (user) => {
		return (response) => {
			if(response.status == 200) {
				if(response.data.error) {
					// If the user doesn't exist, the response object contains
					// an error property rather than throwing an error
					// These are the "Closed" Accounts	
					$scope.invalid.push({"name": user})
				} else {
					//Next if the user exists, make a second request to get more data
					members.getStreams(user, formatStreamData(user, response.data));
				}
			}
		}
	}

	//This function needs to be curried becuase userData has information that 
	//streamData does not and both are need for a status update.
	const formatStreamData = (user, userData) => {
		return (response) => {
			if(response.status == 200) {
				const streamData = response.data;
				if(streamData.stream) {
					// These are the online users
					$scope.onlineUsers.push({userData, streamData})
				} else {
					// These are the offline users
					$scope.offlineUsers.push({"name": user, userData});
				}
			}
		}
	}

	$scope.users.forEach((user) => members.getUser(user, formatUserData(user)))


};

export default MainController;