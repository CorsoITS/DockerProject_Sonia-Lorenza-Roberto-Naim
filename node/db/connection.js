const mysql = require('mysql2/promise');

//crea connessione al database
const createConnection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project_1811'
  });
}

let connection;
const getConnection = async () => {
  if(!connection) {
    connection = await createConnection();
  }

  return connection;
}

module.exports = {
  createConnection,
  getConnection
}