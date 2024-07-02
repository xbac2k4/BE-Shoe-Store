const express = require('express');
const router = express.Router();
const Upload = require('../../config/common/upload');
const ProductController = require('../../controllers/ProductController');

router.get('/get-all-products', new ProductController().getAllProducts);
router.get('/get-products-by-page', new ProductController().getProductsByPage);
router.get('/get-products-by-id/:id', new ProductController().getProductsByID);
router.post('/post-products-with-images', Upload.array('image'), new ProductController().postProductWithImages);
router.put('/put-products-with-images/:id', Upload.array('image'), new ProductController().putProductWithImages);
router.delete('/delete-products/:id', new ProductController().deleteProduct);

module.exports = router;
