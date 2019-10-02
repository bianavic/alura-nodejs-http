const express = require('express');
const app = express();

app.listen(3010, function(){
    console.log('Tá rolando na porta 3010'); // esta funfando mas ainda nao tem rota
});

app.get('/teste', function(req, res){
    console.log('Recebida requisição do teste') // resposta no console para o dev
    res.send('OK') // esta é a resposta para o cliente

})