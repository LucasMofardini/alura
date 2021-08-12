import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// ---- //


const cliente1 =  new Cliente('Alice' , 88822233123);
const contaAlice = new ContaCorrente(cliente1, 100);

const cliente2 = new Cliente('Lucas' , 88822233309);
const contaLucas = new ContaPoupanca(40,cliente2, 1001);

contaLucas.depositar(1000);

contaAlice.depositar(1000);
contaAlice.sacar(100);

console.log(contaAlice);
console.log(contaLucas);

