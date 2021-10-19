// Express é um modulo para criar servidores, modulos
const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express();

    //Todo controller que for colocado na pasta controller vai ser requerido no app
    consign()
        .include('controllers')
        .into(app);

    return app
}