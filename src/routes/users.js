const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.js');

// creat
router.post('/', usersController.createNewUsers)
// read
router.get('/', usersController.getAllUsers)
// update
router.patch('/:id', usersController.updateUsers)
// delete
router.delete('/:id', usersController.deleteUsers)

module.exports = router;