const { Router } = require('express');
const { controlAllProducts,
  controlById,
  controlInsert,
} = require('../controllers/controlProducts');

const productRouters = Router();

productRouters.get('/products', controlAllProducts);
productRouters.post('/products', controlInsert);
productRouters.get('/products/:id', controlById);

module.exports = productRouters;