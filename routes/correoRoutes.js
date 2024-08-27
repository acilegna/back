const express = require("express");
const app = express();

let formulario = require("../controllers/correoControllers");

app.post("/form", formulario.envioCorreo);

module.exports = app;
