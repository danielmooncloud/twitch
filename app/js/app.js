import angular from "angular";
import ngSanitize from "angular-sanitize";

import AppConfig from "./config/AppConfig.js";
import MainController from "./controllers/MainController.js";
import members from "./services/members.js";

import "../scss/application.scss";


angular.module("Twitch", [ngSanitize])
	.config(["$sceDelegateProvider", AppConfig])
	.service("members", ["$http", members])
	.controller("MainController", ["$scope", "members", MainController]);


