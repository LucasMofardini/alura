module.exports = app => {

    // req : o que enviaram para a gente na porta 3000;
    // res : o que vamos devolver para ele
    app.get('/atendimentos', (req, res) => {
        res.send('Você esta na rota de atendimentos');
    });
}