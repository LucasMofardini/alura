# C#
_____

O computador fisico, simula uma maquina virtual.
E o com c# cria-se um código para a maquina virtual.

Existe um compilador para MISL que é a linguagem que a "maquina virtual" entende, 
e todo o ecossistema .net

C# -> Aplicação MSIL -> Biblioteca MSIL -> Maquina virtual -> Sistemas operacionais ( windows, linux )

CLR ( Common Language Runtime) = Maquina Virtual 

Toda aplicação .NET é escrita em uma linguagem compilada para o código intermediário MSIL (Microsoft intermediate language);
O .NET Framework é uma biblioteca utilizada pelas aplicações .NET;
Uma aplicação .NET é compilada para o MSIL;
O código MSIL é executado pela máquina virtual do .NET, a CLR (common language runtime);
O just-in-time compiler é uma parte da CLR que transforma MSIL em código de máquina, apenas em tempo de execução.