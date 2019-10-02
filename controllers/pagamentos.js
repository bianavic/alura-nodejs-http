// criado controller para organizarmos as rotas
module.exports = function (app) {
    app.get('/pagamentos', function (req, res) {
        console.log('rota pagamentos criada')
        res.send('OK')
    })

    // receber dados para criar pagamento
    app.post("/pagamentos/pagamento", function (req, res) {

        // funcao assert retorna um objeto do tipo ValidatorChain
        req.assert('forma_de_pagamento', 'Forma de pagamento é obrigatória.').notEmpty();
        req.assert('valor', 'Valor é obrigatório e deve ser um decimal.').notEmpty().isFloat();
        req.assert('moeda', 'Moeda é obrigatória e deve ter 3 caracteres.').notEmpty().len(3, 3);

        var errors = req.validationErrors();

        if (errors) {
            console.log('Erros de validação encontrados');
            res.status(400).send(errors);
            return;
        }
        var pagamento = req.body;
        console.log('processando uma requisicao de um novo pagamento');

        pagamento.status = "CRIADO";
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function (erro, resultado) {
            if (erro) {
                console.log('Erro ao inserir no banco' + erro);
                res.status(500).send(erro);
            } else {
                console.log('pagamento criado');
                res.location('/pagamentos/pagamento' + result.insertId);
                pagamenti.id = result.insertId;

                res.status(201).json(pagamento);
            }
        });
    });
}