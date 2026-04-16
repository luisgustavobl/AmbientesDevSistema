var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

function soma(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);

    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtrair', function (req, res) {
    var body = req.body;
    var resultado = subtrair(body.a, body.b);

    res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/multiplicar', function (req, res) {
    var body = req.body;
    var resultado = multiplicar(body.a, body.b);

    res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/dividir', function (req, res) {
    var body = req.body;
    var resultado = dividir(body.a, body.b);

    res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});

