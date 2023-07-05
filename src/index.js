const express = require('express')
const app = express()
// const db = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const userRouter = require('./routes/users')

const PORT = process.env.PORT || 4000;
// const sequelize = db.sequelize
app.use(bodyParser.json())
app.use(cors())

app.use('/users', userRouter)

// sequelize.authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

app.listen(PORT, () => {
      console.log(`server berjalan di port ${PORT}`);
  })

module.exports = app

