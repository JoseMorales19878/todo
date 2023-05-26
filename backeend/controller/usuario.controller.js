const express = require('express');
const Usuar=require('../models/Usuario')

const controller={}


//listamos
controller.listado=(req,res)=>{
	Usuar.findAll().then(Usuario => {
        console.log("Listado de Usuarios")
		res.json(Usuario);
    }) 
}
//consultamos por valor
controller.id= (req, res) => {
     let id=Usuar.findByPk(req.params.id)
	 
	 id.then(Usuario => {
		 console.log('Consultamos al usuario')
        res.status(201).json({
		message:'usuario consultado con exito',
		user:Usuario
		})
    })
	.catch(err=>{
	    res.status(404).json({
		message:'Error al consultar el usuario',
		error:err
		})
	})
}


// CREATE
controller.insertar=(req, res) => {
    Usuar.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then(Usuario => {
		console.log('Creamos al usuario')
        res.status(201).json({
		message:'usuario creado con exito',
		user:Usuario
		})
    })
	.catch(err=>{
	    res.status(404).json({
		message:'Error al crear al usuario',
		error:err
		})
	})
};


// Update
controller.modificar=(req, res) => {
    Usuar.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }, {
        where: {
            id: req.params.id
        }
    }).then(Usuario => {
		console.log('Actualizamos al usuario')
        res.status(201).json({
		message:'usuario actualizado con exito',
		user:Usuario
		})
    })
	.catch(err=>{
	    res.status(404).json({
		message:'Error al actualizar al usuario',
		error:err
		})
	})
};

// eliminar
controller.eliminar=(req, res) => {
    Usuar.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }, {
        where: {
            id: req.params.id
        }
    }).then(Usuario => {
		console.log('Eliminamos al usuario')
        res.status(201).json({
		message:'usuario eliminado con exito',
		user:Usuario
		})
    })
	.catch(err=>{
	    res.status(404).json({
		message:'Error al eliminar el usuario',
		error:err
		})
	})
};


module.exports=controller