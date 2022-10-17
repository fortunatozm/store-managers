const { getAllProducts } = require('../models/modelProducts');

const serviceAllProducts = async () => {
  const prod = await getAllProducts();
  return prod;
};

const serviceById = async (id) => {
  const allProducts = await getAllProducts();
  const productID = allProducts.filter((product) => product.id === id);
  return productID;
};

module.exports = {
  serviceAllProducts,
  serviceById,
};