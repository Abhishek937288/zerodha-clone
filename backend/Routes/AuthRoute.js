const { Signup, Login,Me,Logout } = require('../Controllers/AuthController')
const router = require('express').Router();
const { userVerification } = require('../Middlewares/AuthMiddleware');


router.post('/signup', Signup);
router.post('/signin', Login);
router.get('/me', Me);
router.get('/logout', Logout);

router.post('/',userVerification);

module.exports = router;