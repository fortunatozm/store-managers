const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');
  return products;
};

const insertProducts = async (body) => {
  const [productInser] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [body.name],
  );
  return { id: productInser.insertId, name: body.name };
};

module.exports = {
  getAllProducts,
  insertProducts,
};
