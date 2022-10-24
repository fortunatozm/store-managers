const { serviceById,
  sInsertProduct,
  serUpProd,
  serDeletePro,
} = require('../services/serivceProducts');
const serivceProducts = require('../services/serivceProducts');

const controlAllProducts = async (_req, res) => {
  const prods = await serivceProducts.serviceAllProducts();
  console.log(prods);
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
  // const { name } = req.body;
  try {
    const cProd = await sInsertProduct(req.body);
    return res.status(201).json(cProd);
  } catch (error) {
    if (error.message === '"name" is required') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
};

const controlUpdatePr = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  await serUpProd(id, name);
  return res.status(200).json({ id, name });
};

const controlDeletePr = async (req, res) => {
  const { id } = req.params;
  await serDeletePro(id);
  return res.status(204).json({ id }); 
};

module.exports = {
  controlAllProducts,
  controlById,
  controlInsert,
  controlUpdatePr,
  controlDeletePr,
};