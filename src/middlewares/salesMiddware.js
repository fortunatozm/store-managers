const { getAllProducts } = require('../models/modelProducts');

const quantity = (req, res, next) => {
  req.body.forEach((data) => {
    if (data.quantity || data.quantity === 0) {
      if (data.quantity <= 0) {
        return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
      }
      // next();
    } else {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  });
  next();
};

const productId = async (req, res, next) => {
  const allProduct = await getAllProducts();

  const idProdcut = allProduct.map((prod) => prod.id);
  const dataIds = req.body.map((id) => id.productId);

  console.log(idProdcut, dataIds);

  const veribool = dataIds.every((prods) => idProdcut.includes(prods));

  console.log(veribool);
  req.body.forEach((data) => {
    if (data.productId) {
      if (veribool) {
        console.log('Aqui');
      } else {
        return res.status(400).json({ message: 'Product not found' });
      }
    } else {
      return res.status(400).json({ message: '"productId" is required' });
    }
  });
  next();
};

const validSales = (req, res, next) => {
  productId(req, res, next);
  quantity(req, res, next);
};

module.exports = {
  validSales,
};