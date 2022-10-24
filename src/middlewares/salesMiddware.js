const { getAllProducts } = require('../models/modelProducts');
const { getAllSales } = require('../models/modelSales');

const quantity = (req, res, next) => {
  req.body.forEach((data) => {
    if (data.quantity || data.quantity === 0) {
      if (data.quantity <= 0) {
        return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
      }
    } else {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  });
  next();
};

// const quantity = (req, res) => {
//   for (let index = 0; index < req.body.length; index += 1) {
//     const data = req.body[index];
//     if (data.quantity || data.quantity === 0) {
//       if (data.quantity <= 0) {
//         return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
//       }
//     } else {
//       return res.status(400).json({ message: '"quantity" is required' });
//     }
//   }
// };

const productId = async (req, res, next) => {
  const allProduct = await getAllProducts();

  const idProdcut = allProduct.map((prod) => prod.id);
  const dataIds = req.body.map((id) => id.productId);
  const veribool = dataIds.every((prods) => idProdcut.includes(prods));

  req.body.forEach((data) => {
    if (data.productId) {
      if (veribool === 'false') { return res.status(404).json({ message: 'Product not found' }); }
    } else {
      return res.status(400).json({ message: '"productId" is required' });
    }
  });
  next();
};

const salesIdValid = async (req, res, next) => {
  const salesArr = await getAllSales();
  const id = Number(req.params.id);
  const idValids = salesArr.map((idValid) => idValid.saleId);
  // console.log(idValids);
  const saleIdBool = idValids.includes(id);
  // console.log(saleIdBool);
  if (saleIdBool === false) {
    return res.status(404).json({ message: 'Sale not found' }); 
  }
  next();
};

// const validSales = (req, res, next) => {
//   productId(req, res);
//   quantity(req, res);
//   next();
// };

  module.exports = {
    quantity,
    productId,
    salesIdValid,
  };