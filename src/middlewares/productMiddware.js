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