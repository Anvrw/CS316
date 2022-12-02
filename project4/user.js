const express = require('express');
const { signInUser, signUpUser, conflictCheck, getUser, userExists, updateUser, getInfo } = require('../models/User');
const router = new express.Router();

// login
router.route('/login')
.get((req, res) => {
    res.render(
        'login',{}
    );
})
.post((req, res) => {
    let userInfo = JSON.parse(JSON.stringify(req.body));
    let email = userInfo[Object.keys(userInfo)[0]];
    let pass = userInfo[Object.keys(userInfo)[1]];
    let verify = signInUser(email, pass)
    if(verify == true){
        let username =getUser(email)
        res.redirect('/'+ username)
    }
    else{
        res.render(
            'login',{alert: {
                type: 'warning',
                title: 'Incorrect Login',
                message: 'Incorrect email or password'
            }}
        );
    }
});

router.route('/newUser')
.get((req, res) => {
    res.render(
        'newUser',{}
    );
})
.post((req, res) => {
    console.log("check")
    let userInfo = JSON.parse(JSON.stringify(req.body));
    console.log(userInfo)
    let user = userInfo[Object.keys(userInfo)[0]];
    let email = userInfo[Object.keys(userInfo)[1]];
    let pass = userInfo[Object.keys(userInfo)[2]];
    let vpass = userInfo[Object.keys(userInfo)[3]];
    let phone = userInfo[Object.keys(userInfo)[4]];
    if(pass != vpass){
        res.render(
            'newUser',{alert: {
                type: 'warning',
                title: 'Passwords Not Matching',
                message: 'Password does not match the verify password'
            }}
        );
    }
    else if(conflictCheck(email, user)){
        console.log("check")
        res.render(
            'newUser',{alert: {
                type: 'warning',
                title: 'User already exists',
                message: 'The username or email is already taken'
            }}
        );
    }
    else{
        console.log("check2")
        let account = ({
		    username: user,
		    email: email,
            password: pass,
		    phone: phone
	    })
        signUpUser(account);
        res.redirect('/'+ user)
    }
});


// We are really really close with this part. The page renders with the name in the address bar and auto fills. We beleive the userID is being read in incorrectly,
// but we are not sure on how to correct it.

router.route('/:userID')
.get((req, res) => {
    let temp = req.params.userID
    if(userExists(temp)){
        let account = getInfo(temp)
        res.render(
        'user',{
            username: account.username,
            email: account.email,
            phone: account.phone
        })
    }
    else{
        res.render('404', {
            alert: {
                type: 'warning',
                title: '404 Page Not Found',
                message: 'No Page Found'
            }
        })
    }
    
})
.post((req, res) => {
    // take in the user ID
    let userID = req.params.userID;
    console.log(userID)
    let userInfo = JSON.parse(JSON.stringify(req.body));
    let user = userInfo[Object.keys(userInfo)[0]];
    let email = userInfo[Object.keys(userInfo)[1]];
    let phone = userInfo[Object.keys(userInfo)[2]];
    updateUser(userID, user, email, phone)
    let account = getInfo(userID)
    // return account and display in each box
    res.render(
        'user',{
            alert: {
            type: 'success',
            title: 'Information updated',
            message: 'congrats'
            },
            username: account.username,
            email: account.email,
            phone: account.phone
        }
    )
});

module.exports = router
