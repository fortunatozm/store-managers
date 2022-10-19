const { insertSales, sales, getAllSales } = require('../models/modelSales');
// const { getAllProducts } = require('../models/modelProducts');

const ssInsert = async (data) => {
  const id = await sales();
  await Promise.all(data.map((dat) => insertSales(id, dat)));
  // Promise.all(promises);
  return { id, itemsSold: data };
};

const serAllSales = async () => {
  const allSales = await getAllSales();
  return allSales;
};

const serIdSale = async (id) => {
  const salesArr = await getAllSales();
  const idFiltered = salesArr.filter((idSale) => idSale.saleId === Number(id));
  const filMap = idFiltered.map((fil) => (
    { date: fil.date, productId: fil.productId, quantity: fil.quantity }));
  return filMap;
};

module.exports = {
  ssInsert,
  serAllSales,
  serIdSale,
};