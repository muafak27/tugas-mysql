const {Sequelize, DataTypes} = require("sequelize");
const db = require("../config/database");

const User = db.define('users', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING
}, {
  timestamps: false
})

module.exports = User 

// (async() => {
//   await db.synce()
// })();
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

// module.exports = db;