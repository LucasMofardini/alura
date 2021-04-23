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



