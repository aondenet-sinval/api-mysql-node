const mysql = require('mysql2');
const dotenv = require('dotenv/config.js');

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
  function cadastroVendas(codigo, descricao, qtde, preco_un, data, subtotal, cliente_id){
    //Cadastro de produtos

    //

    let con = mysql.createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPassword,
      database: dbName
    });
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO registros_vendas (codigo, descricao, qtde," +
                  " preco_un, subtotal, data, cliente_id) VALUES ('" + codigo +
                  "','" + descricao + "','" + qtde + "','" + preco_un +
                  "','" + subtotal + "','" + data +
                  "','" + cliente_id + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Venda cadastrada com sucesso!");
      });
      con.end();
    });
  }

module.exports = cadastroVendas;
