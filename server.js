const express =require("express");
const routes = require("./routes.js");
const BodyParser = require("body-parser");
const app = express();

app.use(BodyParser.json());
app.use(express.json());
app.use(routes);
app.listen(3020, () => console.log("Servidor iniciado na porta 3020"));
