const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');

router.post('/register', new UserController().postRegister);
router.post('/login', new UserController().postLogin);

module.exports = router;
