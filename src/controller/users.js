// const usersModels = require('../models/users.js')

// const getAllUsers = async (req, res) => {
//     try {
//         const [data] = await usersModels.getAllUsers();
//             res.json({
//                 message: 'get all users',
//                 data
//              })  
//     } catch (error) {
//         res.json({
//             message: 'database Error',
//             serverMessage: error,
//         })
//     }
// }
// const createNewUsers = async (req, res) => {
//     const {body} = req;
//     try {
//         await usersModels.createNewUsers(body);
//             res.json({
//                 message: 'post all users',
//                 data: body
//             })
//     } catch (error) {
//         res.json({
//             message: 'database Error',
//             serverMessage: error,
//         })
//     }
// }
// const updateUsers = async (req, res) => {
//     const {id} = req.params;
//     const {body} = req
//     try {
//         await usersModels.updateUsers(body, id)
//             res.json({
//                 message: 'update users',
//                 data: {
//                     id: id,
//                     body
//                 }
//             })
//     } catch (error) {
//         res.json({
//             message: 'database Error',
//             serverMessage: error,
//         })
//     }
// }
// const deleteUsers = async (req, res) => {
//     const {id} = req.params;
//     try {
//         await usersModels.deleteUsers(id)
//         res.json({
//             message: 'delete users',
//             data: null
//         })
//     } catch (error) {
//         res.json({
//             message: 'database Error',
//             serverMessage: error,
//         })
//     }
// }

// module.exports = {
//     getAllUsers,
//     createNewUsers,
//     updateUsers,
//     deleteUsers
// }

// const db = require('../config/db')
// const users = db.users

// async function  insertUsers(name, email, address) {
//     await users.create({name, email, address});
//   }

// async function updateUsers (name, email, address, id){
//     await users.update({name, email, address}, { where: {id: id}});
//    }

// // async function getOneusers(id) {
// //    const users = await users.findByPk(id); 
// //      return users;
// //     }
   
// const getAllUsers = async () => {   
//     const users = await users.findAll();
//      return users;
//     }
   
// async function deleteUsers(id) {
//     const users = await getOneUsers(id);
//      await users.destroy();
//     }

// module.exports = {
//     insertUsers,
//     updateUsers,
//     getAllUsers,
//     deleteUsers
// }

const Users = require('../models/users')

// get
const getAllUsers = async(req, res) => {
    try {
        const response = await Users.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

// create
const createUsers = async(req, res) => {
    try {
        await Users.create(req.body)
        res.status(201).json('user created')
    } catch (error) {
        console.log(error.message);
    }
}

// update
const updateUsers = async(req, res) => {
    try {
        await Users.update(req.body, {
            where: {id: req.params.id}
        })
        res.status(200).json('user updated')
    } catch (error) {
        console.log(error.message);
    }
}

// delete
const deleteUsers = async(req, res) => {
    try {
        await Users.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json('user deleted')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers
}