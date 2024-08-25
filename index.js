const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const configMensaje = require("./src/configMensaje");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/formulario", (req, res) => {
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
  


 

/* funciona bien !!
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'));
app.listen(3000, () => {
  console.log("Servidor corriendo");
}); */

 

 