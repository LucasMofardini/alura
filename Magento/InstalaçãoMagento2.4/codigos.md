### Antes de seguir os passos, Fazer o download no site do magento https://magento.com/tech-resources/download
_________________
# Passo  a Passo
* (Criando a pasta que vai ficar o projeto)
 cd /var/www/html 
sudo mkdir aluramoda

* (Copiar o arquivo baixado para a pasta criada)
sudo cp [caminho do arquivo .zip do Magento no meu computador] 

* (unzip)
sudo unzip [arquivo .zip do Magento]

* (Ajustando permissoes)
cd /var/www/html/aluramoda
sudo chown -R www-data:www-data .

* (Alterando permissoes dos arquivos)
cd /var/www/html/aluramoda
sudo find . -type d -exec chmod 775 {} \;
sudo find . -type f -exec chmod 664 {} \;

* (Criando um banco)
sudo mysql -u root -p [Pressione ENTER]
CREATE DATABASE aluramoda;

* (Criando um usuario no banco)
CREATE USER '[Meu nome]'@'localhost' IDENTIFIED BY 'aluramoda123';

* (Colocando privilegios na sua conta criada)
GRANT ALL PRIVILEGES ON aluramoda.* TO '[Meu nome]'@'localhost';

* (Colocando o Magento como executavel)
cd /var/www/html/aluramoda
sudo chmod u+x bin/magento

* (Setup de instalação do magento)
   (processo demora cerca de 15 minutos)
cd /var/www/html/aluramoda
sudo -u www-data bin/magento setup:install \
--base-url=http://localhost/aluramoda \
--db-host=localhost \
--db-name=aluramoda \
--db-user=lucas \
--db-password=aluramoda123 \
--admin-firstname=lucas \
--admin-lastname=mofardini \
--admin-email=lucasmofardini2@gmail.com \
--admin-user=admin \
--admin-password=admin123 \
--language=pt_BR \
--currency=BRL \
--timezone=America/Sao_Paulo \
--use-rewrites=1 \
--backend-frontname="admin"

* (Desabilitar a segunda verificação no admin)
cd /var/www/html/aluramoda
sudo -u www-data bin/magento module:disable Magento_TwoFactorAuth