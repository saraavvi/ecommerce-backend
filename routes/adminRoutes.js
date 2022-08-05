const express = require('express');

const {
  addNewProduct, allProducts, findProduct, updateProduct, deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

router.get('/products', allProducts);
router.get('/products/:id', findProduct);
router.post('/products', addNewProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
