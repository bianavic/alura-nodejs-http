const app = require('./config/custom-express')(); // o () é para invocar app

app.listen(3010, function(){
    console.log('Tá rolando na porta 3010'); // esta funfando mas ainda nao tem rota
});

