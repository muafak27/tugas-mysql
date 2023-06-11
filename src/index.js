const express = require('express');
const app = express();
const usersRoutes = require('./routes/users.js'); 
const middlewareLogRequest = require('./middleware/logs.js');
require('dotenv').config()

const PORT = process.env.PORT || 4000;

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/users', usersRoutes);


app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`);
})