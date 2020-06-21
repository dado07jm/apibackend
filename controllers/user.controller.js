var UserService = require('../services/user.service');



//DEVUELVE TODOS LOS USUARIOS
exports.getAllUsers = async function (req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Users = await UserService.getAllUsers({}, page, limit)
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Users Recieved"});
    } catch (e) {
        console.log(e.message);
        return res.status(400).json({status: 400, message: e.message});
    }
}


exports.findUser = async function (req, res, next) {
 
    var nombre = req.body.nombre;    
    try {
        var getUser = await UserService.getUser(nombre)
        return res.status(200).json({ status: 200, message: "ok" })
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
}


exports.createUser = async function (req, res, next) {
    var User = {
        nombre: req.body.nombre
    }
    try {       
        var createdUser = await UserService.createUser(User)
        return res.status(201).json({token: createdUser, message: "ok"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: "Error al crear el usuario"})
    }
}

exports.updateUser = async function (req, res, next) {
    var User = {
        nombre: req.body.nombre,
        puntos: req.body.puntos
    }
    try {
        var updateUser = await UserService.updatetUser(user)
        return res.status(200).json({ status: 200, data: updatedUser, message: "ok" })
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
}
