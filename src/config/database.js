const mysql = require('mysql2')

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1piece22',
    database: 'tugas_mysql',
  });

  module.exports = dbPool.promise();