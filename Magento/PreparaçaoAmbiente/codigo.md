### Site do magento para a preparação do ambiente https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements.html
_______
#### Requisitos mínimos -
* Sistema operacional Linux x86-64 (Ubuntu)
* Memória RAM 8GB

________
#### Codigo -
 * **PHP 7.4** {
     *  sudo apt-get update
     * sudo add-apt-repository ppa:ondrej/php
     * sudo apt-get update
     * sudo apt-get install -y \
    php7.4 \
    php7.4-bcmath \
    php7.4-ctype \
    php7.4-curl \
    php7.4-dom \
    php7.4-gd \
    php7.4-iconv \
    php7.4-intl \
    php7.4-mbstring \
    php7.4-mysqli \
    php7.4-simplexml \
    php7.4-soap \
    php7.4-xsl \
    php7.4-zip \
    php7.4-sockets
}
 * **Apache2** {
     *  sudo apt-get install apache2
     *  sudo a2enmod rewrite
     *  sudo gedit /etc/apache2/apache2.conf {
             Encontre a linha <Directory /var/www/> e troque a opção 
               AllowOverride None para AllowOverride All
              ** Salve essa alteração **
        } 
     *  sudo service apache2 restart     
}
 * **PHP 7.4** {
     *  sudo apt install mysql-server-8.0 **(Ubuntu 20.040)**
}
 * **Composer versão 1.10** {
     *  sudo apt install php-cli unzip curl
     * curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer --version=1.10.16
}
 * **Elasticsearch versão 7.x** {
     * curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
     * echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
  * sudo apt update
  * sudo apt install elasticsearch
  * sudo chmod g+ws /etc/elasticsearch/
  * sudo systemctl start elasticsearch
  * curl -XPUT -H "Content-Type: application/json" http://localhost:9200/_cluster/settings -d '{ "transient": { "cluster.routing.allocation.disk.threshold_enabled": false } }'
  * curl -XPUT -H "Content-Type: application/json" http://localhost:9200/_all/_settings -d '{"index.blocks.read_only_allow_delete": null}'
   * Entrar no http://localhost:9200 e ver se o elasticsearch está funcionando   
}