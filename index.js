const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const configMensaje = require("./src/configMensaje");

/* import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import configMensaje from './src/configMensaje.js'; */

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/formulario", (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
});

app.get("/", (req, res) => {
  res.send("pagina inicio desde indexxx");
});

app.listen(3000, () => {
  console.log("Servidor corriendos ");
});
