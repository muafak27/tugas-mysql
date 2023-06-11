const usersModels = require('../models/users.js')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModels.getAllUsers();
            res.json({
                message: 'get all users',
                data
             })  
    } catch (error) {
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}
const createNewUsers = async (req, res) => {
    const {body} = req;
    try {
        await usersModels.createNewUsers(body);
            res.json({
                message: 'post all users',
                data: body
            })
    } catch (error) {
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}
const updateUsers = async (req, res) => {
    const {id} = req.params;
    const {body} = req
    try {
        await usersModels.updateUsers(body, id)
            res.json({
                message: 'update users',
                data: {
                    id: id,
                    body
                }
            })
    } catch (error) {
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}
const deleteUsers = async (req, res) => {
    const {id} = req.params;
    try {
        await usersModels.deleteUsers(id)
        res.json({
            message: 'delete users',
            data: null
        })
    } catch (error) {
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}