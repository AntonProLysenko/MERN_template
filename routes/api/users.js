const express = require ('express')
const router = express.Router()
const usersCtrl = require ("../../controlers/api/users")
const ensureLoggedIn = require ('../../config/ensureLoggedIn')

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);


//POST request /api/users
router.post("/", usersCtrl.create)


//POST request /api/login
router.post("/login", usersCtrl.login)

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

module.exports = router