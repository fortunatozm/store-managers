const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');
  return products;
};

const insertProducts = async (name) => {
  const [productInser] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  // console.log(productInser);
  return { id: productInser.insertId, name };
};

module.exports = {
  getAllProducts,
  insertProducts,
};