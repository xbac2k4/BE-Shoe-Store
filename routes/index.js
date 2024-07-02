var express = require('express');
const router = express.Router();
//
const usersRouter = require('./users/index');
const productsRouter = require('./products/index');
//
router.use("/api/v1/users", usersRouter);
router.use("/api/v1/products", productsRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
