webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AppConfig = $sceDelegateProvider => {
	$sceDelegateProvider.resourceUrlWhitelist(["self", "https://wind-bow.gomix.me/twitch-api/users/**"]);
};

/* harmony default export */ __webpack_exports__["a"] = (AppConfig);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const MainController = ($scope, members) => {

	$scope.onlineUsers = [];
	$scope.offlineUsers = [];
	$scope.invalid = [];
	$scope.error;

	$scope.users = members.users;

	$scope.userFilter = (online, offline) => {
		$scope.online = online;
		$scope.offline = offline;
	};

	const categorizeUser = (user, userData, streamData) => {
		if (userData.error) {
			$scope.invalid.push({ "name": user });
		} else if (streamData.stream) {
			$scope.onlineUsers.push({ userData, streamData });
		} else {
			$scope.offlineUsers.push({ "name": user, userData });
		}
		//Forces angular to update the UI when the state is updated
		$scope.$apply();
	};

	const getUserData = (users, cb) => {
		users.forEach((() => {
			var _ref = _asyncToGenerator(function* (user) {
				try {
					//First request is to get user data
					const userData = (yield members.getUser(user)).data;
					//Second request is to get data about user's streams
					const streamData = (yield members.getStreams(user)).data;
					//send the data to be categorized
					cb(user, userData, streamData);
				} catch (err) {
					$scope.error = new Error("Error occured during connection. Please Try Again Later.");
				}
			});

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		})());
	};

	getUserData($scope.users, categorizeUser);
};

/* harmony default export */ __webpack_exports__["a"] = (MainController);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function members($http) {

	this.users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

	this.getUser = user => {
		return $http.jsonp("https://wind-bow.gomix.me/twitch-api/users/" + user);
	};

	this.getStreams = user => {
		const config = { headers: { "Client-ID": "di3ur1s4mxgvhj4xoshs7jbf2midww0" } };
		return $http.get("https://api.twitch.tv/kraken/streams/" + user, config);
	};
}

/* harmony default export */ __webpack_exports__["a"] = (members);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_sanitize__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_sanitize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_sanitize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_AppConfig_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_MainController_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_members_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_application_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_application_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scss_application_scss__);









__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("Twitch", [__WEBPACK_IMPORTED_MODULE_1_angular_sanitize___default.a]).config(["$sceDelegateProvider", __WEBPACK_IMPORTED_MODULE_2__config_AppConfig_js__["a" /* default */]]).service("members", ["$http", __WEBPACK_IMPORTED_MODULE_4__services_members_js__["a" /* default */]]).controller("MainController", ["$scope", "members", __WEBPACK_IMPORTED_MODULE_3__controllers_MainController_js__["a" /* default */]]);

/***/ })
],[6]);