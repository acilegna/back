const{ request, response }=require('express');
const { model } = require('mongoose');
const nodemailer =require('nodemailer');

const envioCorreo=(req=request, resp=response)=>{

    let body=req.body;

    let config= nodemailer.createTransport({
       host: 'smtp.gmail.com',
       post:587,
        auth: {
        user: 'acilegna.airam88@gmail.com', // Cambialo por tu email
        pass: 'nzql iljq cpbu ocle' // Cambialo por tu password
        }
    })

    const opciones = {   
   
        from:  body.nombre,   
        to: body.email,  
        subject: body.mensaje,
       
             };


config.sendMail(opciones,function(error,result) {

    if (error) return resp.json({ok:false, msg:error});
    return resp.json({
        ok:true,
        msg:result
    })
})
             
    
}
module.exports={ envioCorreo}