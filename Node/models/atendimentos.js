const conexao = require('../infraestrutura/conexao.js');
const moment = require('moment');
class Atendimento {
    adiciona(atendimento, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        // boolean
        const validaData = moment(data).isSameOrAfter(dataCriacao);
        const validaCliente = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: validaData,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: validaCliente,
                mensagem: 'Cliente deve ter pelo menos 5 caracteres'
            }
        ];

        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        if (existemErros) {
            res.status(400).json(erros);
        } else {

            const atendimentoDatado = { ...atendimento, dataCriacao, data };


            const sql = 'INSERT INTO Atendimentos SET ?';

            conexao.query(sql, atendimentoDatado, (error, resultado) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json(resultado);

                }
            });
        }
    }
}

module.exports = new Atendimento;