# Seleciona tudo da tabela produtos que tenha o codigo igual a 1000889;
Select * from tabela_de_produtos tdp where CODIGO_DO_PRODUTO = 1000889;

# Seleciona tudo da tabela produtos que o preco da lista esteja entre 19.51 e 19.52;
Select * from tabela_de_produtos tdp where PRECO_DE_LISTA BETWEEN 19.51 AND 19.52;

#Sabor ou Tamanho verdadeiros
select * from tabela_de_produtos tdp where SABOR  = 'Manga'
or TAMANHO  = '470 ml';

#Sabor e Tamanhos verdadeiros
select * from tabela_de_produtos tdp where SABOR  = 'Manga'
AND TAMANHO  = '470 ml';

# Que tenha manga e nao tenha 470ml
select * from tabela_de_produtos tdp where SABOR  = 'Manga'
AND NOT(TAMANHO  = '470 ml');

#Que tenha Manga e Laranja no SABOR
select * from tabela_de_produtos tdp where SABOR IN ('Manga','Laranja');

#Clientes em sao paulo ou rio de janeiro e a idade maior ou igual a  18
Select * from tabela_de_clientes tdc  where cidade in ('São Paulo', 'Rio de Janeiro') AND IDADE >= 18;


#Sabor que tenha Maça em qualquer lugar da string e embalagem que seja pet
Select * from tabela_de_produtos tdp where SABOR LIKE '%Maça%' and EMBALAGEM = 'PET';

#Para valores diferentes, Combinações que nao se repetem
SELECT DISTINCT embalagem, tamanho from tabela_de_produtos tdp;

#Produtos do sabor laranja 
SELECT DISTINCT embalagem, tamanho from tabela_de_produtos tdp
where sabor = 'Laranja';

#Para Limitar a saida
Select * from tabela_de_produtos tdp LIMIT 5;
#Pega a partir do segundo, pega 3
select * from tabela_de_produtos tdp Limit 2,3;
#Pega os 10 primeiros de 2017/01/01
select * from notas_fiscais nf WHERE DATA_VENDA = '2017-01-01' LIMIT 10;

#Mostra os produtos do menor preço para o maior
Select * from tabela_de_produtos tdp order by PRECO_DE_LISTA ;
#Mostra os produtos do maior preço para o menor
Select * from tabela_de_produtos tdp order by PRECO_DE_LISTA DESC;

#Agregações
SELECT ESTADO,SUM(LIMITE_DE_CREDITO) as 'Limite Total' from tabela_de_clientes tdc GROUP BY ESTADO ;

select embalagem, MAX(PRECO_DE_LISTA) as 'MAIOR PREÇO' from tabela_de_produtos tdp GROUP BY EMBALAGEM ;

select embalagem, count(*) as 'Contador' from tabela_de_produtos tdp  GROUP BY EMBALAGEM;

select bairro, sum(limite_de_credito) from tabela_de_clientes tdc where CIDADE = 'Rio de Janeiro' GROUP BY bairro order by bairro;

#HAVIN é uma condiçao que se aplica ao resultado de uma agregaçao
Select Estado, SUM(LIMITE_DE_CREDITO) as 'Soma limite' from tabela_de_clientes tdc  group by estado HAVING SUM(LIMITE_DE_CREDITO) > 900000;

 
#CASE
Select NOME_DO_PRODUTO, PRECO_DE_LISTA, 
CASE WHEN PRECO_DE_LISTA >= 12 then 'PRODUTO CARO'
	 WHEN PRECO_DE_LISTA >= 7 and PRECO_DE_LISTA <= 12 then 'PRODUTO EM CONTA'
ELSE 'PRODUTO BARATO' END  as 'STATUS DO PREÇO'
from tabela_de_produtos tdp;


#Mostra tudo de  todas as pessoas que tiverem a matricula igual na tabela_de_vendedores e notas_fiscais 
Select * from tabela_de_vendedores tdv 
INNER JOIN notas_fiscais nf 
ON tdv.MATRICULA = nf.MATRICULA;

#Mostra a matricula, nome e conta quantas notas tem ao todo da tabela de vendedores e da tabela de notas fiscais
SELECT a.matricula, a.nome, count(*) as "Notas emitidas" from tabela_de_vendedores a 
INNER JOIN notas_fiscais b 
ON a.MATRICULA = b.MATRICULA group by a.matricula;

#Faturamento anual da empresa. 
SELECT YEAR(DATA_VENDA), SUM(QUANTIDADE * PRECO) AS FATURAMENTO
FROM notas_fiscais NF INNER JOIN itens_notas_fiscais INF 
ON NF.NUMERO = INF.NUMERO
GROUP BY YEAR(DATA_VENDA);

#Left Join
Select count(*) from tabela_de_clientes tdc; 

SELECT cpf, count(*) from notas_fiscais nf  group by cpf;

#Todo mundo  da tabela de clientes, mas somentes os correspondentes da tabela de notas fiscais
#Todos que tem cadastro, mas nao tem compra
select DISTINCT a.CPF, a.NOME, b.CPF from tabela_de_clientes a 
left join notas_fiscais b ON a.CPF = b.CPF where b.cpf is null;
#Alguem que tem no cadastro e que nao comprou em 2015
select DISTINCT a.CPF, a.NOME, b.CPF from tabela_de_clientes a 
left join notas_fiscais b ON a.CPF = b.CPF where b.cpf is null AND YEAR(b.DATA_VENDA) = 2015;

Select * from tabela_de_vendedores tdv 

#Somente vendedores que moram no mesmo bairro que os clientes
Select tdv.BAIRRO, tdv.NOME, tdc.BAIRRO, tdc.NOME from tabela_de_vendedores tdv 
INNER JOIN tabela_de_clientes tdc 
ON tdv.BAIRRO = tdc.BAIRRO;

#Mostra todos os vendedores. Se nao tiver cliente que mora no mesmo bairro, mostra null
Select tdv.BAIRRO, tdv.NOME, tdc.BAIRRO, tdc.NOME from tabela_de_vendedores tdv 
LEFT JOIN tabela_de_clientes tdc 
ON tdv.BAIRRO = tdc.BAIRRO;

#Clientes que nao tem vendedores no mesmo bairro mostra null
Select tdv.BAIRRO, tdv.NOME, tdc.BAIRRO, tdc.NOME from tabela_de_vendedores tdv 
RIGHT JOIN tabela_de_clientes tdc 
ON tdv.BAIRRO = tdc.BAIRRO;

#Mostra tudo até Clientes sem vendedores no bairro e Vendedores sem clientes no bairro
Select tdv.BAIRRO, tdv.NOME, tdc.BAIRRO, tdc.NOME from tabela_de_vendedores tdv 
LEFT JOIN tabela_de_clientes tdc 
ON tdv.BAIRRO = tdc.BAIRRO
UNION
Select tdv.BAIRRO, tdv.NOME, tdc.BAIRRO, tdc.NOME from tabela_de_vendedores tdv 
RIGHT JOIN tabela_de_clientes tdc 
ON tdv.BAIRRO = tdc.BAIRRO;

#UNION
#Juntando consultas
SELECT DISTINCT BAIRRO FROM tabela_de_clientes tdc
UNION
SELECT DISTINCT BAIRRO FROM tabela_de_vendedores tdv;

#SUBCONSULTA

Select * from tabela_de_clientes tdc WHERE BAIRRO in ('Tijuca','Jardins','Copacabana','Santo Amaro');
#OU USANDO SUBCONSULTA
Select * from tabela_de_clientes tdc WHERE BAIRRO in (Select DISTINCT BAIRRO from tabela_de_vendedores tdv );

Select x.EMBALAGEM, x.preco_maximo from 
(Select Embalagem, Max(preco_de_lista) as preco_maximo from tabela_de_produtos tdp group by EMBALAGEM) x WHERE x.preco_maximo >= 10;

SELECT X.CPF, X.CONTADOR FROM 
(SELECT CPF, COUNT(*) AS CONTADOR FROM notas_fiscais
WHERE YEAR(DATA_VENDA) = 2016
GROUP BY CPF) X WHERE X.CONTADOR > 2000


#VIEW

Select x.EMBALAGEM, x.preco_maximo from 
(Select Embalagem, Max(preco_de_lista) as preco_maximo from tabela_de_produtos tdp group by EMBALAGEM) x WHERE x.preco_maximo >= 10;


	

