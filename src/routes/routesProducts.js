const { Router } = require('express');
const { controlAllProducts,
  controlById,
  controlInsert,
} = require('../controllers/controlProducts');
const { ctrlInsertSales, ctrlAlltSales, ctrlIdSales } = require('../controllers/controlSales');
const { validSales } = require('../middlewares/salesMiddware');

const productRouters = Router();

productRouters.get('/products', controlAllProducts);
productRouters.post('/products', controlInsert);
productRouters.post('/sales', validSales, ctrlInsertSales);
productRouters.get('/sales', ctrlAlltSales);
productRouters.get('/sales/:id', ctrlIdSales);
productRouters.get('/products/:id', controlById);

module.exports = productRouters;