const mysql = require('mysql');

// criando a funcao que cria a conexao
function createDBConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'payfast'
  });
}

module.exports = function () {
  return createDBConnection;
}