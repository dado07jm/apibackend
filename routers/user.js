var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller')
var Authorization = require('../auth/authorization');

/* RUTAS QUE EXISTEN PARA LA ENTIDAD USUARIO */
router.post('/user/',UserController.findUser) //busca un usuario
router.post('/create', UserController.createUser) //crea el usuario
router.get('/allusers',Authorization,UserController.getAllUsers) //devuelve todos los usuarios
router.post('/update',Authorization,UserController.updateUser) //edita los puntos del usuario
router.get('/user/validar',Authorization,UserController.getUserVal) //valida si el token esta correcto

module.exports = router;
