var express = require("express");
var app = express();

app.use(express.json());

app.post("/despesa", (req, resp) => {
  var despesa = req.body;
  console.log(despesa);
});

app.get("/despesa/:despesaId", (req, resp) => {
  var despesaId = req.params.despesaId;
  console.log("GET - DespesaId: " + despesaId);
});

app.put("/despesa/:despesaId", (req, resp) => {
  var despesaId = req.params.despesaId;
  console.log("PUT - DespesaId: " + despesaId);
});

app.delete("/despesa/:despesaId", (req,resp) => {
  var despesaId = req.params.despesaId;
  console.log("DELETE - DespesaId: " + despesaId);
});

app.listen(3000, () => {
  console.log('EasyFinance - Port 3000!');
})