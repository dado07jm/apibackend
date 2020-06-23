var UserService = require('../services/user.service');



//DEVUELVE TODOS LOS USUARIOS
exports.getAllUsers = async function (req, res, next) {
    //var page = req.query.page ? req.query.page : 1
    //var limit = req.query.limit ? req.query.limit : 10;
    try {
        //var Users = await UserService.getAllUsers({}, page, limit)
        var Users = await UserService.getAllUsers();
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Users Recieved"});
    } catch (e) {
        console.log(e.message);
        return res.status(400).json({status: 400, message: e.message});
    }
}


//BUSCA UN USUARIO EN LA BD
exports.findUser = async function (req, res, next) {
 
    var nombre = req.body.nombre;    
    try {
        var getUser = await UserService.getUser(nombre)
        if(getUser ===201){
            return res.status(201).json({ status: 201, message: "El usuario no existe" })
        }
        else{
            return res.status(200).json({ status: 200, message: getUser })
        }
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
}

//CREA UN USUARIO NUEVO
exports.createUser = async function (req, res, next) {
    var User = {
        nombre: req.body.nombre
    }
    try {       
        var createdUser = await UserService.createUser(User)
        return res.status(200).json({token: createdUser, message: "ok"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: "Error al crear el usuario"})
    }
}


//ACTUALIZA LOS PUNTOS DEL USUARIO
exports.updateUser = async function (req, res, next) {
    var User = {
        nombre: req.body.nombre,
        puntos: req.body.puntos
    }

    try {
        var updateUser = await UserService.updatetUser(User)
        return res.status(200).json({ status: 200, data: updateUser, message: "ok" })
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
}


//VALIDA EL TOKEN
exports.getUserVal = async function (req, res, next) {   
    console.log("asd");
    return res.status(200).json({ status: 200, message: "Token Valido" })    
}