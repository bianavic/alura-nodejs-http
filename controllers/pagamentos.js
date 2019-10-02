// criado controller para organizarmos as rotas
module.exports = function(app){
    app.get('/pagamentos', function(req, res) {
        console.log('rota pagamentos criada')
        res.send('OK')
    })
}

