import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;

contaCorrenteLucas.depositar(2000);
contaCorrenteLucas.sacar(300);
contaCorrenteLucas.cliente = cliente1;

// ---- //

const contaCorrenteTeste = new ContaCorrente();
contaCorrenteTeste.agencia = 1001;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

contaCorrenteTeste.cliente = cliente2;
contaCorrenteTeste.cliente.nome = "Alice";
contaCorrenteTeste.cliente.cpf = 88822233309;


let valorTransferir = 200;
contaCorrenteLucas.transferir(valorTransferir, contaCorrenteTeste);
console.log(contaCorrenteLucas);
console.log(contaCorrenteTeste);

