const Conf = require('conf');

const store = new Conf();

const defaultStore = [{
	username: 'test',
	password: 'test123',
	email: 'test@email.com',
	phone: '1234567890'
}]


// this function would let return true if the information does exist
function signInUser(email, password) {
	// grab the needed value
	let accounts = store.get('accounts') || defaultStore;
	// check if the user exists
	for (let i in accounts) {
		const account = accounts[i];
		if (account.email === email && account.password === password) {
			return true;
		}
	}
	return false;
}

function updateUser(userID, username, email, phone) {
	// grab the old value
	let accounts = store.get('accounts') || defaultStore;
	// update user
	console.log(userID)
	for (let i in accounts) {
		const account = accounts[i];
		if (account.username === userID) {
			
			account.username = username;
			account.email = email;
			account.phone = phone;
			accounts.push(account)
		}
	}
	
	store.set('accounts', accounts)
}

function conflictCheck(email, username) {
	// grab the needed value
	let accounts = store.get('accounts') || defaultStore;
	// check if the user exists
	for (let i in accounts) {
		const account = accounts[i];
		if (account.email === email || account.username === username) {
			return true;
		}
	}
	return false;
}

function signUpUser(account) {
	// grab the old value
	let accounts = store.get('accounts') || defaultStore;
	// updates stuff
	accounts.push(account);
	// write changes
	store.set('accounts', accounts);
}

function getUser(email){
	// grab the old value
	let accounts = store.get('accounts') || defaultStore;
	// do stuff
	for (let i in accounts) {
		const account = accounts[i];
		if (account.email === email) {
			return account.username;
		}
	}
	return '';
}

function getInfo(user){
	// grab the old value
	let accounts = store.get('accounts') || defaultStore;
	// do stuff
	for (let i in accounts) {
		const account = accounts[i];
		if (account.username === user) {
			return account
		}
	}
}

function userExists(user){
	// grab the old value
	let accounts = store.get('accounts') || defaultStore;
	// do stuff
	for (let i in accounts) {
		const account = accounts[i];
		if (account.username === user) {
			return true;
		}
	}
	return false
}

exports.getUser = getUser;
exports.getInfo = getInfo;
exports.signInUser = signInUser;
exports.signUpUser = signUpUser;
exports.updateUser = updateUser;
exports.conflictCheck = conflictCheck;
exports.userExists = userExists;
