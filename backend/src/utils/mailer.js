const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_SMTP_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Ignora errores de certificado
  },
});

async function enviarCorreo(destinatario, asunto, html) {
  try {
    await transporter.sendMail({
      from: `"Académicas UNCA" <${process.env.GOOGLE_SMTP_USER}>`,
      to: destinatario,
      subject: asunto,
      text: "Buen dia le informamos que su preinscripcion se realizo correctamente",
      html
    });
  } catch (error) {
    console.error("Error al enviar correo:", error.message);
    throw error;
  }
}

module.exports = enviarCorreo;
