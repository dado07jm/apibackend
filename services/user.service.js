var User = require('../models/user.model');
var jwt = require('jsonwebtoken');



//DEVUELVE TODOS LOS USUARIOS DE LA BASE DE DATOS
exports.getAllUsers = async function (query, page, limit) {
    // Options setup for the mongoose paginate
    /*var options = {
        page,
        limit
    }*/
    // Try Catch the awaited promise to handle the error 
    try {
        var todosUsuarios = await User.find().sort({'puntos': -1});
        //var todosUsuarios = await User.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return todosUsuarios;

    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while Paginating Users');
    }
}


//DEVUELVE UN SOLO USUARIO
exports.getUser = async function (nombre) {
    try {
        var existe = await User.findOne({
            nombre: nombre
        });
        if (existe === null) {
            return 201
        }
        else {
            return existe;
        }
    } catch (e) {
        throw Error("Error al recuperar el usuario")
    }
}



//CREA AL USUARIO
exports.createUser = async function (user) {
    var newUser = new User({
        nombre: user.nombre,
        puntos: 0
    })

    try {
        // Saving the User 
        var savedUser = await newUser.save();
        var token = jwt.sign({
            id: savedUser._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        console.log(token);
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)
        throw Error("Error while Creating User")
    }
}



exports.updatetUser = async function (user) {

    console.log(user);
    var oldUser = await User.findOne({
        nombre: user.nombre
    });

    try {
        // Saving the User 
        oldUser.puntos = user.puntos

        var updateUser = await oldUser.save()
        return updateUser;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)
        throw Error("Error while Creating User")
    }
}

