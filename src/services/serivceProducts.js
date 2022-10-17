const { getAllProducts, insertProducts } = require('../models/modelProducts');

const serviceAllProducts = async () => {
  const prod = await getAllProducts();
  return prod;
};

const serviceById = async (id) => {
  const allProducts = await getAllProducts();
  const productID = allProducts.filter((product) => product.id === id);
  return productID;
};

const sInsertProduct = async (name) => {
  const prodName = await insertProducts(name);
  return prodName;
};

module.exports = {
  serviceAllProducts,
  serviceById,
  sInsertProduct,
};