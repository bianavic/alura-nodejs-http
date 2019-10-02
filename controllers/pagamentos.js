// criado controller para organizarmos as rotas
module.exports = function (app) {

    app.get('/pagamentos', function (req, res) {
        console.log('rota pagamentos criada')
        res.send('OK')
    })


    // receber dados para criar pagamento
    app.post('/pagamentos/pagamento', function (req, res) {
        var pagamento = req.body;
        console.log('processando a requisicao de um novo pagamento');
        
        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        res.send(pagamento)
    });
}

