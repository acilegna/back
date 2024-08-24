const express = require("express");
const app = express();

let formulario = require("../controllers/correoControllers");

app.post("/formulario", formulario.envioCorreo);

module.exports = app;
