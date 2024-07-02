var express = require('express');
const router = express.Router();
//
const usersRouter = require('./users/index');
//
router.use("/api/v1/users", usersRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
