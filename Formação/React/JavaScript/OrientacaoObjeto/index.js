import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";



// ---- //


const cliente1 =  new Cliente('Alice' , 88822233123);
const contaAlice = new ContaCorrente(cliente1, 100);

const cliente2 = new Cliente('Lucas' , 88822233309);
const contaLucas = new ContaCorrente(cliente2, 1001);

contaLucas.depositar(1000);
contaLucas.transferir(500 , contaAlice);

console.log(contaAlice);
console.log(contaLucas);

console.log(ContaCorrente.numeroDeContas);