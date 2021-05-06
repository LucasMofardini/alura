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



