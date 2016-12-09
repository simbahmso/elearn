var express = require('express');
var router = express.Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

//Include User Model
var User = require('..modules/user');
//Include Student Model
var Student = require('..modules/student');
//Include Instructor Model
var Instructor = require('..modules/instructor');

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('users/signup');
});

router.post('/signup', function (req, res, next) {
	// Get Form Values
	var first_name			= req.body.first_name;
	var last_name			= req.body.last_name;
	var street_address		= req.body.street_address;
	var city				= req.body.city;
	var state   			= req.body.state;
	var zip					= req.body.zip;
	var email				= req.body.email;
	var username			= req.body.username;
	var password			= req.body.password;
	var password2			= req.body.password2
	var type				= req.body.type
})
	// Form Field Validation
	req.checkBody('first_name', First name field is required).notEmpty();
	req.checkBody('last_name', Last name field is required).notEmpty();
	req.checkBody('email', Email field is required).notEmpty();
	req.checkBody('email', Email must be a valid email address).isEmail();
	req.checkBody('username', Username field is required).notEmpty();
	req.checkBody('password', Password field is required).notEmpty();
	req.checkBody('password2', Passwords do not match).equals(req.body.password);

module.exports = router;
