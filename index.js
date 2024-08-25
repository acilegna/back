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
}); 

 

 