const express = require("express");
const cadastroVendas = require("./src/controllers/insert.js")
const routes = express.Router();
routes.use(express.urlencoded({ extended: true }));

routes.post("/vendas", function(req, res){
  const codigo = req.body.codigo;
  const descricao = req.body.descricao;
  const qtde = req.body.qtde;
  const preco_un = req.body.preco_un;
  const data = req.body.data;
  const subtotal = qtde * preco_un;
  const cliente_id = req.body.cliente_id;
  cadastroVendas(codigo, descricao, qtde, preco_un, data, subtotal, cliente_id);
});


routes.get("/", (req, res) => {
return res.json({ name: "Rota de vendas..." });
});

module.exports = routes;
