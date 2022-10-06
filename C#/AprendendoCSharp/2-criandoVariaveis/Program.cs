using System;
class Programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("Projeto  2 - Criando Variáveis");
        int idade;
        idade = 20;

        idade = idade - 5;

        Console.WriteLine("A idade é de : " + idade);

        Console.WriteLine("Projeto 3 - Criando Variáveis ponto flutuante");

        double salario = 3000.12;
        Console.WriteLine(salario);

        Console.WriteLine("Projeto 4 - Conversoes e outros tipos");

        double salario2 = 3000.10;
        int salarioInteiro = (int)salario2;

        //Numeros grandes
        long numGrande = 1011230191203139;

        //Numeros pequenos
        short numPequeno = 10;

        float altura = 1.62f;


        Console.WriteLine("Tecle enter para sair ...");
        Console.ReadLine();
    }
}