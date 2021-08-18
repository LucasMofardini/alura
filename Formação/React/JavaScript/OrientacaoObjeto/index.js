import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./Funcionario/SistemaAutenticacao.js";

const diretor = new Diretor("Lucas", 10000, 12345678900);
diretor.cadastrarSenha('12345');
 
const gerente = new Gerente("João", 5000, 98765432100);
gerente.cadastrarSenha('123454123');

const cliente = new Cliente("Lais", 98765432100,'123');

const diretorLogado = SistemaAutenticacao.login(diretor, "12345");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123454123");
const clienteLogado = SistemaAutenticacao.login(cliente, "123");

// console.log(diretorLogado);
// console.log(gerenteLogado);
console.log(clienteLogado);