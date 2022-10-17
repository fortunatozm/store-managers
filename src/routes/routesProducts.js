const { Router } = require('express');
const { controlAllProducts, controlById } = require('../controllers/controlProducts');

const productRouters = Router();

productRouters.get('/products', controlAllProducts);
productRouters.get('/products/:id', controlById);

module.exports = {
  productRouters,
};