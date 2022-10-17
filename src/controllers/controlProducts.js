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
  const { name } = req.body;
  console.log(name);
  if (name) {
    if (name.length < 5) {
      return res.status(422)
        .json({ message: '"name" length must be at least 5 characters long' });
    }
    const cProd = await sInsertProduct(name);
    return res.status(201).json(cProd);
  }
  return res.status(400).json({ message: '"name" is required' });
};

module.exports = {
  controlAllProducts,
  controlById,
  controlInsert,
};