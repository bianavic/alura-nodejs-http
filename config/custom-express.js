// carregando express e iniciando a aplicacao que inicialmente estava no index.js
const express = require('express');
const consign = require('consign');

module.exports = function() {
    var app = express();

    // consig ajuda no gerenciamento das pastas, ajuda no carregamento das rotas
    // esta lib é mais leve e independente do framework
    // abaixo foi definido o que queremos incluir no objeto express (dentro da variavel app)
    // desta forma a variavel app passa a deter todo o conhecimento da pasta controllers
    consign()
    .include('controllers')
    .into(app) 
    

    return app;
}