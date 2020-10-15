var express = require('express');
var app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.send('Tec Web');
});

app.get('/aplicativo', function(req, res) {
  res.send('Aplicativo Exemplo');
});

app.get('/html', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/imagens', function (req, res) {
	let linkString = 'Imagem 1 - Imagem 2 - Imagem 3';
    res.send(linkString);
});

app.delete('/clientes/10', function (req, res) {
  res.send('Cliente número 10 removido com sucesso');
});

//[completar com as rotas listadas acima]
app.listen(3000, function () {
 console.log('Aplicacao Web rodando na porta 3000!');
})