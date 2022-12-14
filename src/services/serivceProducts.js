const Joi = require('joi');

const {
  getAllProducts,
  insertProducts,
  updateProducts,
  deleteProd,
} = require('../models/modelProducts');

const serviceAllProducts = async () => {
  const prod = await getAllProducts();
  return prod;
};

const serviceById = async (id) => {
  const allProducts = await getAllProducts();
  const productID = allProducts.filter((product) => product.id === id);
  return productID;
};

const schema = Joi.object({
  name: Joi.string().min(5).required(),
}).messages({
  'any.required': '{{#label}} is required',
  'string.empty': '{{#label}} is required',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
});

const sInsertProduct = async (body) => {
  // console.log(schema.validate(body));
  const { error } = schema.validate(body);
  if (error) {
    throw new Error(error.message);
  }
  const prodName = await insertProducts(body);
  return prodName;
};

const serUpProd = async (id, name) => {
  console.log(name);
  const spUpdate = await updateProducts(id, name);
  return spUpdate;
};

const serDeletePro = async (id) => {
  await deleteProd(id);
};

module.exports = {
  serviceAllProducts,
  serviceById,
  sInsertProduct,
  serUpProd,
  serDeletePro,
};