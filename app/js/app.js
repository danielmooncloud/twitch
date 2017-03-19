var angular = require("angular");
var ngSanitize = require("angular-sanitize");
require("bootstrap-loader");
require("../scss/application.scss");

var app = angular.module('Twitch', [ngSanitize])

.config(["$sceDelegateProvider", function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
		"self",
		"https://wind-bow.gomix.me/twitch-api/users/**"	
	]);
}]);

require("./controllers/MainController.js");
require("./services/members.js");
