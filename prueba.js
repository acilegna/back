import { Resend } from 'resend';

 const resend = new Resend('re_N3XRTEJu_49mNXGANgbmS91TgPsEGQcE5');

 

module.exports = (formulario) => {
  const { data, error } =   resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['m4x1miliano.2022@gmail.com'],
    subject: 'Hello World',
    html: `
  <strong>Nombre:</strong> ${formulario.nombre} <br/>
  <strong>E-mail:</strong> ${formulario.email} <br/>
  <strong>Mensaje:</strong> ${formulario.mensaje}
  `,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
 
 

 
};
