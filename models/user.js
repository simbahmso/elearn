var mongoose = require('mongoose'); 

// User Schema
var classSchema = mongoose.Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	type: {
		type: String
	}
})

var Class = module.exports = mongoose.model('User', UserSchema);

// Fetch All Classes
module.exports.getUserById = function(id ,callback){
	User.findById(id, callback);
}

// Fetch  Single Class
module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	Class.findOne(query, callback);
}