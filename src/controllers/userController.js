const express= require('express');
const fs= require('fs');
const path= require('path')

const datos= JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/user.json')));


const userController={
    login:(req,res)=>{
    return res.render('login');
    },
    register:(req,res)=>{
        return res.render('register');
        
    },
    processRegister:(req,res)=>{
        const user={
            "id": datos.length+1,
            "nombreCompleto": req.body["nombreCompleto"],
            "usuario": req.body.usuario,
            "Email":req.body,
            "Nacimiento": req.body.Nacimiento,
            "Domicilio": req.body.Domicilio,
            "Tipo de Perfil": req.body.perfil,
            "Intereses": req.body.interes,
            "image": req.body.Fotoperfil
        }
       fs.writeFileSync(path.resolve(__dirname,'../database/user.json'),JSON.stringify([...datos,user],null,2));
       return res.redirect('/')
}
}

    module.exports= userController;