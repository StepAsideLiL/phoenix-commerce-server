const express = require('express')
const {isAuthenticated} = require('../middlewares/auth.middleware');
const {isAdmin} = require('../middlewares/admin.middleware');
const {loginUser,registerUser,getSingleUser,updateUser,deleteUser,getAllUsers,giveRole} = require('../controllers/user.controller');
const router = express.Router();


router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/:uid',isAuthenticated, getSingleUser);
router.patch('/:uid',isAuthenticated, updateUser);
router.delete('/:uid',isAuthenticated, deleteUser);
router.get('/',isAuthenticated,isAdmin, getAllUsers);
router.patch('/:uid',isAuthenticated,isAdmin, giveRole);

module.exports = router;