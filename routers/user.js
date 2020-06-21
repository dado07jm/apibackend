var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller')
var Authorization = require('../auth/authorization');

/* RUTAS QUE EXISTEN PARA LA ENTIDAD USUARIO */
router.post('/user/',UserController.findUser) //busca un usuario
router.post('/create', UserController.createUser) //crea el usuario
router.get('/allusers',Authorization,UserController.getAllUsers) //devuelve todos los usuarios



//router.get('/user/:id',UserController.getUser) //devuelve un usuario

//router.post('/user/create',UserController.createUser) //crea el usuario
//router.put('/user/update',UserController.updateUser) //actualiza el usuario

module.exports = router;
