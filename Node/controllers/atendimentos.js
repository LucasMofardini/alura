const atendimentos = require('../models/atendimentos.js');
const Atendimento = require('../models/atendimentos.js')
module.exports = app => {
    //Duas rotas : GET e SET para o '/atendimentos'

    // req : o que enviaram para a gente na porta 3000;
    // res : o que vamos devolver para ele
    // pegando dados do diretorio atendimentos
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        atendimentos.buscaPorId(id, res);
    });

    // enviando dados no diretorio atendimentos
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);

    });
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Atendimento.altera(id, valores, res);
    });
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.deleta(id, res);
    });
    // O post ele devolve os argumentos passados pelo postman
}