import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

// ---- //


const cliente1 =  new Cliente('Alice' , 88822233123);
const contaAlice = new ContaCorrente(cliente1, 100);

const cliente2 = new Cliente('Lucas' , 88822233309);
const contaLucas = new ContaPoupanca(40,cliente2, 1001);

contaLucas.depositar(1000);
contaLucas.transferir(500 , contaAlice);

console.log(contaAlice);
console.log(contaLucas);

