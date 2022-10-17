const app = require('./app');
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

// // Testar a conexão do banco de dados
// const [result] = await connection.execute('SELECT 1');
// if (result ) {
//   console.log('MYSQL connection OK');
// }
