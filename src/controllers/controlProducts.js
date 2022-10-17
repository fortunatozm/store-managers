const { serviceAllProducts,
  serviceById,
  sInsertProduct,
} = require('../services/serivceProducts');

const controlAllProducts = async (_req, res) => {
  const prods = await serviceAllProducts();
  return res.status(200).json(prods);
};

const controlById = async (req, res) => {
  const prod = await serviceById(Number(req.params.id));
  if (prod.length > 0) {
    return res.status(200).json(prod[0]);
  }
    return res.status(404).json({ message: 'Product not found' });
};

const controlInsert = async (req, res) => {
  console.log('Aqui', req.body);
  const { name } = req.body;
  // const id = await serviceAllProducts().length + 1;
  const cProd = await sInsertProduct(name);
  return res.status(201).json(cProd);
};

module.exports = {
  controlAllProducts,
  controlById,
  controlInsert,
};