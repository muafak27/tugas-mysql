const {Sequelize} = require('sequelize')

const db = new Sequelize('tugas_mysql', 'root', '1piece22', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = db
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports ={
//   "database":{
//        "host": "localhost",
//        "port": 3306,
//        "user": "root",
//        "password": "1piece22",
//        "database": "tugas_mysql"
//   },
//   "pool": {
//     "max": 5,
//     "min": 0,
//     "acquire": 30000,
//     "idle": 10000
//   }
// };
// const mysql = require('mysql2')

// const conn = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "1piece22",
//   database: "tugas_mysql"
// })

// conn.getConnection((err) => {
//   if(err) throw err
//   console.log('database Conneted')
// })

// module.exports = conn
// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "1piece22",
//   DB: "users",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
// const mysql = require('mysql2')  
// const Sequelize = require('sequelize')

// // const dbPool = mysql.createPool({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '1piece22',
// //     database: 'tugas_mysql',
// //   });
// const sequelize = new Sequelize(
//   'tugas_mysql',
//   'root',
//   '1piece22',
//    {
//      host: 'localhost',
//      dialect: 'mysql'
//    }
//  );
//  sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.error('Unable to connect to the database: ', error);
// });

//   // module.exports = dbPool.promise();
//   module.exports = sequelize