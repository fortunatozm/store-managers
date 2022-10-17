const { serviceAllProducts, serviceById } = require('../services/serivceProducts');

const controlAllProducts = async (_req, res) => {
  const prods = await serviceAllProducts();
  return res.status(200).json(prods);
};

const controlById = async (req, res) => {
  const prod = await serviceById(Number(req.params.id));
  console.log(prod.length);
  console.log(prod);
  if (prod.length > 0) {
    return res.status(200).json(prod[0]);
  } 
    return res.status(404).json({ message: 'Product not found' });
};

module.exports = {
  controlAllProducts,
  controlById,
};