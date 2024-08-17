const { Resend } = require("resend");
const instanceResend = new Resend("re_N3XRTEJu_49mNXGANgbmS91TgPsEGQcE5");


module.exports = async (formulario) => {
  const { data, error } = await instanceResend.emails.send({
    from: "Acme <acilegna.airam88@gmail.com>",
    to: ["acilegnaairam88@outlook.com"],
    subject: "Hello World",
    html: `
  <strong>Nombre:</strong> ${formulario.nombre} <br/>
  <strong>E-mail:</strong> ${formulario.email} <br/>
  <strong>Mensaje:</strong> ${formulario.mensaje}
  `,
  });

  if (error) {
    return console.error({ error });
  }


}; 