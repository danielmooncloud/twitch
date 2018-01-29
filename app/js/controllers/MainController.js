

const MainController = ($scope, members) => {

	$scope.onlineUsers = [];
	$scope.offlineUsers = [];
	$scope.invalid = [];
	$scope.error;

	$scope.users = members.users;

	$scope.userFilter = (online, offline) => {
		$scope.online = online;
		$scope.offline = offline;
	}

	
	const categorizeUser = (user, userData, streamData) => {
		if(userData.error) {
			$scope.invalid.push({"name": user});
		} else if(streamData.stream) {
			$scope.onlineUsers.push({userData, streamData});
		} else {
			$scope.offlineUsers.push({"name": user, userData});
		}
		//Forces angular to update the UI when the state is updated
		$scope.$apply();
	}


	const getUserData = (users, cb) => {
		users.forEach(async (user) => {
			try {
				//First request is to get user data
				const userData = (await members.getUser(user)).data;
				//Second request is to get data about user's streams
				const streamData = (await members.getStreams(user)).data;
				//send the data to be categorized
				cb(user, userData, streamData);
			} catch(err) {
				$scope.error = new Error("Error occured during connection. Please Try Again Later.")
			}
			
		})
	}
	

	getUserData($scope.users, categorizeUser);




};

export default MainController;