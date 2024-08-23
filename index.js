/* import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import configMensaje from './src/configMensaje.js'; */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const configMensaje = require("./src/configMensaje");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/formulario", cors(), (req, res) => {
  console.log(req.body)
  configMensaje(req.body);
  res.status(200).send();
});

app.get("/", (req, res) => {
  res.send("pagina inicio desde indexxx");
});

app.listen(3000, () => {
  console.log("Servidor corriendos ");
});

/* const express = require("express");
const { Resend } = require("resend");
const instanceResend = new Resend("re_N3XRTEJu_49mNXGANgbmS91TgPsEGQcE5");
const app = express();

app.get("/formulario", async ( req, res) => {
  
  const { data, error } = await instanceResend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["m4x1miliano.2022@gmail.com"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
 */
