var express = require("express");
var cors = require("cors");
var jwt = require('jsonwebtoken');
var app = express();

var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	user: 'root',
	password: '',
	database: "tecdespesaweb",
  port: 3306
});

app.use(cors());
app.use(express.json());

app.post('/auth', (req,resp) => {
  var user = req.body;

  connection.query("SELECT * FROM usuario WHERE nome = ? and senha = ?", [user.nome, user.senha] , (err, result) =>{
    var usuario = result[0];

    if(result.length == 0) {
        resp.status(401);
        resp.send({token: null, usuario: usuario, success: false});
    } else {
      let token = jwt.sign({id: usuario.nome}, 'tecdespesaweb', {expiresIn: 6000});
      resp.status(200);
      resp.send({token: token, usuario:usuario, success: true});
    }

  });

});

verifica_token = (req, resp, next) => {
  var token = req.headers['x-access-token'];

  if(!token){
    return resp.status(401).end();
  }

  jwt.verify(token, 'tecdespesaweb', (err, decoded) => {
    if (err)
      return resp.status(401).end();

    req.usuario = decoded.id;
    next();
  });
}


app.post("/despesa", (req, resp) => {
  var despesa = req.body;
  console.log("POST - Despesa");

  connection.query("INSERT INTO despesa SET ?", [despesa], (err, result) => {
  	if (err) {
  		console.log(err);
  		resp.status(500).end();

  	} else {
  		resp.status(200);
  		resp.json(result.insertId);
  	}
  }); 
});

app.get("/despesa", verifica_token, (req, resp) => {
  var despesaId = req.params.despesaId;
  console.log("GET - Despesas: " + despesaId);

  connection.query("SELECT * FROM despesa", (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).end();

    } else {
      resp.status(200);
      resp.json(result);
    }
  });  
});

app.get("/despesa/:despesaId", verifica_token, (req, resp) => {
  var despesaId = req.params.despesaId;
  console.log("GET - DespesaId: " + despesaId);

  connection.query("SELECT * FROM despesa WHERE id = ?", [despesaId], (err, result) => {
  	if (err) {
  		console.log(err);
  		resp.status(500).end();

  	} else {
  		resp.status(200);
  		resp.json(result);
  	}
  });  
});

app.put("/despesa/:despesaId", verifica_token, (req, resp) => {
  var despesaId = req.params.despesaId;
  var despesa = req.body();
  console.log("PUT - DespesaId: " + despesaId);

  connection.query("UPDATE despesa SET ? WHERE id = ?", [despesa, despesaId], (err, result) => {
  	if (err) {
  		console.log(err);
  		resp.status(500).end();

  	} else {
  		resp.status(200).end();
  	}
  });
});

app.delete("/despesa/:despesaId", verifica_token, (req,resp) => {
  var despesaId = req.params.despesaId;
  console.log("DELETE - DespesaId: " + despesaId);

  connection.query("DELETE FROM despesa WHERE id = ?", [despesaId], (err, result) => {
  	if (err) {
  		console.log(err);
  		resp.status(500).end();

  	} else {
  		resp.status(200).end();
  	}
  });
});

app.listen(3000, () => {
  console.log('EasyFinance - Port 3000!');
});