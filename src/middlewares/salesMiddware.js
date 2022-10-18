const { getAllProducts } = require('../models/modelProducts');

const quantity = (req, res) => {
  req.body.map((data) => {
    if (data.quantity || data.quantity === 0) {
      if (data.quantity <= 0) {
        return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
      }
    } else {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    return true;
  });
};

const productId = async (req, res) => {
  const allProduct = await getAllProducts();

  const idProdcut = allProduct.map((prod) => prod.id);
  const dataIds = req.body.map((id) => id.productId);
  const veribool = dataIds.every((prods) => idProdcut.includes(prods));

  // console.log(veribool, idProdcut, dataIds);
  if (!veribool) res.status(404).json({ message: 'Product not found' });

  req.body.map((data) => {
    if (!data.productId) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    return true;
  });
  // next();
};

const validSales = (req, res, next) => {
  productId(req, res);
  quantity(req, res);
  next();
};

module.exports = {
  validSales,
};