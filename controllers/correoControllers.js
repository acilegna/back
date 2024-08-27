const { request, response } = require("express");
//const { model } = require("mongoose");
const nodemailer = require("nodemailer");

const envioCorreo = (req = request, resp = response) => {
  let body = req.body;

  let config = nodemailer.createTransport({
    host: "smtp.gmail.com",
    post: 587,
    auth: {
      user: "acilegna.airam88@gmail.com", // Cambialo por tu email
      pass: "nzql iljq cpbu ocle", // Cambialo por tu password
    },
  });

  const opciones = {
    from: ` <strong>${body.nombre}:</strong>`,
    to: "m4x1miliano.2022@gmail.com",
    subject: "Solicitando Información",
    html: `<strong>Te contacta:</strong> ${body.nombre}<br/>
    <strong>E-mail:</strong> ${body.email} <br/>
     <strong>Mensaje:</strong> ${body.mensaje}`,
  };

  config.sendMail(opciones, function (error, result) {
    if (error) return resp.json({ ok: false, msg: error });
    return resp.json({
      ok: true,
      msg: result,
    });
  });
};
module.exports = { envioCorreo };
