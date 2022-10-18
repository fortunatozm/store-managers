const { ssInsert, serAllSales, serIdSale } = require('../services/serviceSales');

const ctrlInsertSales = async (req, res) => {
  const data = req.body;
  const cvInsert = await ssInsert(data);
  return res.status(201).json(cvInsert);
};

const ctrlAlltSales = async (_req, res) => {
  const ctrlSales = await serAllSales();
  return res.status(200).json(ctrlSales);
};

const ctrlIdSales = async (req, res) => {
  const idsale = await serIdSale(req.params.id);
  return res.status(200).json(idsale);
};

module.exports = {
  ctrlInsertSales,
  ctrlAlltSales,
  ctrlIdSales,
};