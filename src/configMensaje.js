const nodemailer = require("nodemailer");

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    //secure: true,
    port: 465,
    auth: {
      user: "resend", // Cambialo por tu email
      pass: "re_N3XRTEJu_49mNXGANgbmS91TgPsEGQcE5", // Cambialo por tu password re_N3XRTEJu_49mNXGANgbmS91TgPsEGQcE5
    },
  });

  
  const mailOptions = {
    from: ` <strong>${formulario.nombre}:</strong>`,
    //from: `<onboarding@resend.dev>`,
    to: "m4x1miliano.2022@gmail.com", // Cambia esta parte por el destinatario
    subject: "Email Portafolio",
    html: `
  <strong>Nombre:</strong> ${formulario.nombre} <br/>
  <strong>E-mail:</strong> ${formulario.email} <br/>
  <strong>Mensaje:</strong> ${formulario.mensaje}
  `,
  };

  console.info("Enviando correo ...");
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Enviado! " + info.response);
    }
  });
};
