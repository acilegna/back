const { Resend } = require("resend");
const instanceResend = new Resend("re_N3XRTEJu_49mNXGANgbmS91TgPsEGQcE5");


module.exports = async (formulario) => {
  try {
  const { data, error } = await instanceResend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["m4x1miliano.2022@gmail.com"],
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
 } catch (error) {
    res.status(400).json({
    status: "error",
    message: "Email not sent",
    });
  }

}; 