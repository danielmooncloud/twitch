'use strict';

app.controller('MainController', ['$scope', 'members', function($scope, members) {

$scope.onlineUsers = [];
$scope.offlineUsers = [];
$scope.invalid = [];

$scope.users = members.users;

$scope.state = function(online, offline) {
	$scope.online = online;
	$scope.offline = offline;
}

$scope.users.forEach(function(user) {
	members.getUsers(user, function(firstResponse) {
		if(firstResponse.status !== 200) {
			return false;
		}
		let userData = firstResponse.data;
		if(userData.error) {
			let userObject = {
				"name" : user
			}
			$scope.invalid.push(userObject);
		} else {
			members.getStreams(user, function(secondResponse) {
				if(secondResponse.status !== 200) {
					return false;
				}
				let streamData = secondResponse.data;
				if(!streamData.stream) {
					let userObject = {
						"name": user,
						"userData" : userData
					}
					$scope.offlineUsers.push(userObject);
					
				} else {
					let userObject = {
						"userData" : userData,
						"streamData" : streamData
					}
					$scope.onlineUsers.push(userObject);
				}
			})
		}	
	})
})


}]);