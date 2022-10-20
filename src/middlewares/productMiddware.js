const { getAllProducts } = require('../models/modelProducts');

const idUpProduct = async (req, res, next) => {
  const id = Number(req.params.id);
  const allProd = await getAllProducts();
  const filProd = allProd.map((proIds) => proIds.id);
  const idBool = filProd.includes(id);

  console.log('id:', id, 'all Prod:', allProd, 'all id Prod:', filProd, 'boll value', idBool);

  if (idBool === false) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  next();
};

const nemeProduct = async (req, res, next) => {
  const { name } = req.body;
  const id = Number(req.params.id);
  // console.log('tamanho', name.length);
  if (name) {
    if (name.length >= 5) {
      res.status(200).json({ id, name });
    } else {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
  } else {
    return res.status(400).json({ message: '"name" is required' });
  }

  next();
};
// const Joi = require('joi');

// const validName = (req, res, next) => {

//   const { name } = req.body;
//   if (vNameEmpty.validate(name)) {
//     if (vNameLen.validate(name)) {
//       next();
//     }
//     return res.status(422)
//       .json({ message: '"name" length must be at least 5 characters long' });
//   }
//   return res.status(400).json({ message: '"name" is required' });
// };

// module.exports = {
//   validName,
// };

module.exports = {
  idUpProduct,
  nemeProduct,
};
