const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
  user: 'acilegna.airam88@gmail.com', // Cambialo por tu email
  pass: 'nzql iljq cpbu ocle' // Cambialo por tu password
  }
  });


const mailOptions = {
 
 
  from: ` <strong>${formulario.nombre}:</strong>`,

  to: 'amgye2188@gmail.com', // Cambia esta parte por el destinatario
  subject: 'Email Portafolio',
  html: `
  <strong>Nombre:</strong> ${formulario.nombre} <br/>
  <strong>E-mail:</strong> ${formulario.email} <br/>
  <strong>Mensaje:</strong> ${formulario.mensaje}
  `
  };


console.info('Enviando correo ...')
transporter.sendMail(mailOptions, (error, info)=> {
  if (error) {
 console.log(error);
  } else {
    console.log('Enviado! ' + info.response);

  }
});
}