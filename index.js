const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'devleterkani',  //Enter here your account login
	password: 'musabuyuk1212e'		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 //1 - online, 7 - invisible
	user.gamesPlayed([10]);    //List app IDs
});