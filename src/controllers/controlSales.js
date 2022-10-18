const { ssInsert, serAllSales, serIdSale } = require('../services/serviceSales');

const ctrlInsertSales = async (req, res) => {
  const data = req.body;
  console.log('Control', data);
  const cvInsert = await ssInsert(data);
  console.log('control2', cvInsert);
  res.status(201).json(cvInsert);
};

const ctrlAlltSales = async (_req, res) => {
  const ctrlSales = await serAllSales();
  res.status(200).json(ctrlSales);
};

const ctrlIdSales = async (req, res) => {
  const idsale = await serIdSale(req.params.id);
  res.status(200).json(idsale);
};

module.exports = {
  ctrlInsertSales,
  ctrlAlltSales,
  ctrlIdSales,
};