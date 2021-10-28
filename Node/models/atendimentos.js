const conexao = require('../infraestrutura/conexao.js');
class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?';
        conexao.query(sql, atendimento, (error, resultado) => {
            if (error) {
                console.log(error);
            } else {
                console.log(resultado);

            }
        })
    }
}

module.exports = new Atendimento;