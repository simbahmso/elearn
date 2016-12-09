var mongoose = require('mongoose'); 
var bcrypt = require('bcryptjs')

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
		bcrypt: true
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

//Save Student
module.exports.saveStudent = function(newUser, newStudent, callback){
	bcrypt.hash(newUser.password, 10 function err, hash){
		if err throw errl
			//Set has
		newUser.password = hash;
		console.log('Student is being saved!');
		async.paralell([newUser.save, newStudent,save], callback);
	}

}