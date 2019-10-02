// carregando express e iniciando a aplicacao que inicialmente estava no index.js
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();

    // adicionar o middleware body-parser no express, agora esta pronto para receber json
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // obrigatoriamente logo apos o bodyParser
    app.use(expressValidator());

    // consig carrega todos os arquivos da pasta controllers para dentro do objeto express
    // ele ajuda no carregamento das rotas
    // é uma lib é mais leve e independente do framework
    // abaixo definimos o que incluiremos no objeto express (dentro da variavel app)
    // desta forma a variavel app passa a deter todo o conhecimento da pasta controllers
    consign()
    .include('controllers')
    .then('persistencia')
    .into(app);
 
   return app;
 }