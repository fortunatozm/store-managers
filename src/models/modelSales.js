const connection = require('./connection');

const sales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );
  return insertId;
};

const insertSales = async (id, data) => {
  console.log(id, data);
    await connection.execute(
      `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
      [id, data.productId, data.quantity],
    );
  return { id, itemsSold: data };
};

const getAllSales = async () => {
  const [BinaryRow] = await connection.execute(`
  SELECT sp.sale_id as saleId, s.date, sp.product_id as productId, sp.quantity
  FROM StoreManager.sales_products AS sp INNER JOIN StoreManager.sales AS s ON sp.sale_id = s.id
  ORDER BY saleId`);
  // console.log(BinaryRow);
  return BinaryRow;
};

module.exports = {
  insertSales,
  sales,
  getAllSales,
};