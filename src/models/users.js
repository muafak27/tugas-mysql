const dbPool = require('../config/database.js')

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM tugas_mysql.users';
    return dbPool.execute(SQLQuery);
}
const createNewUsers = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) 
                        VALUES('${body.name}', '${body.email}', '${body.address}')`;
    return dbPool.execute(SQLQuery);
}
const updateUsers = (body, id) => {
    const SQLQuery = ` UPDATE users SET name='${body.name}', email='${body.email}', address='${body.address}'
                        WHERE id=${id} `;
    return dbPool.execute(SQLQuery);
}
const deleteUsers = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers, 
    deleteUsers
}