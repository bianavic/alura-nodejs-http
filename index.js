const app = require('./config/custom-express')(); // o () é para invocar app

app.listen(3010, function(){
    console.log('Tá rolando na porta 3010'); // esta funfando mas ainda nao tem rota
});

// receber dados para criar pagamento
app.post('/pagamentos/pagamento', function(req, res) {
    var pagamento = req.body;
    console.log(pagamento);
    res.send('OK')
});
