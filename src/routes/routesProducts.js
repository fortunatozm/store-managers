const { Router } = require('express');
const { controlAllProducts,
  controlById,
  controlInsert,
  controlUpdatePr,
} = require('../controllers/controlProducts');
const { idUpProduct } = require('../middlewares/productMiddware');
const {
  // ctrlInsertSales,
  ctrlAlltSales,
  ctrlIdSales } = require('../controllers/controlSales');
const { salesIdValid } = require('../middlewares/salesMiddware');

const productRouters = Router();

productRouters.get('/products', controlAllProducts);
productRouters.get('/products/:id', controlById);
productRouters.post('/products', controlInsert);
productRouters.put('/products/:id', idUpProduct, controlUpdatePr);
// productRouters.post('/sales', validSales, ctrlInsertSales);
productRouters.get('/sales', ctrlAlltSales);
productRouters.get('/sales/:id', salesIdValid, ctrlIdSales);

module.exports = productRouters;