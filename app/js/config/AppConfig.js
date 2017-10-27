const AppConfig = ($sceDelegateProvider) => {
	$sceDelegateProvider.resourceUrlWhitelist(["self","https://wind-bow.gomix.me/twitch-api/users/**"]);
}

export default AppConfig;