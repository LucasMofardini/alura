const Atendimento = require('../models/atendimentos.js')
module.exports = app => {
    //Duas rotas : GET e SET para o '/atendimentos'

    // req : o que enviaram para a gente na porta 3000;
    // res : o que vamos devolver para ele
    // pegando dados do diretorio atendimentos
    app.get('/atendimentos', (req, res) => {
        res.send('Você esta na rota de atendimentos e está realizando um GET');
    });

    // enviando dados no diretorio atendimentos
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);

    });
    // O post ele devolve os argumentos passados pelo postman
}