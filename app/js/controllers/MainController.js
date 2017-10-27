

const MainController = ($scope, members) => {

	$scope.onlineUsers = [];
	$scope.offlineUsers = [];
	$scope.invalid = [];

	$scope.users = members.users;

	$scope.state = (online, offline) => {
		$scope.online = online;
		$scope.offline = offline;
	}

	const formatUserData = user => response => {
		if(response.status !== 200) return false;

		response.data.error ? 
			$scope.invalid.push({"name": user}) :
			members.getStreams(user, formatStreamData(user, response.data));
	}

	const formatStreamData = (user, userData) => response => {
		if(response.status !== 200) return false;
		let streamData = response.data;
		
		streamData.stream ?
			$scope.onlineUsers.push({userData, streamData}) :
			$scope.offlineUsers.push({"name": user, userData});
	}

	$scope.users.forEach((user) => members.getUser(user, formatUserData(user)))


};

export default MainController;