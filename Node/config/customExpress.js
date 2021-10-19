// Express é um modulo para criar servidores, modulos
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    //Todo controller que for colocado na pasta controller vai ser requerido no app
    consign()
        .include('controllers')
        .into(app);

    return app
}