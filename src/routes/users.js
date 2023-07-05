const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const {getAllUsers, createUsers, updateUsers, deleteUsers} = require('../controller/users')

// creat
// router.post('/', async (req, res, next) => {
//     try {
//         const {body} = req
//         const name = body.user.name
//         const email = body.user.email
//         const address = body.user.address
//         console.log(name,email, address)
//         const user =  await insertUsers(name, email, address)
//             .then(() => res.json({ message: 'user created.' }));
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(400)
//     }
// })
router.post('/', createUsers)
// read
router.get('/', getAllUsers)
// update
router.patch('/:id', updateUsers)
// delete
router.delete('/:id', deleteUsers)

module.exports = router;