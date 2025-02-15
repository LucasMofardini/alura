const customExpress = require('./config/customExpress.js');
const conexao = require('./infraestrutura/conexao.js');
const Tabelas = require('./infraestrutura/tabelas.js');

conexao.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Conectado com sucesso');
        Tabelas.init(conexao);

        const app = customExpress();

        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });

    }
});

