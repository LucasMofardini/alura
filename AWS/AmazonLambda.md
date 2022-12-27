# Lambda - Gerenciamento de Funçoes sem servidor

01 -
- Apenas precisamos configurar o tamanho da memoria que vamos na aplicação, o resto fica a serviço da amazon alocar;

- Rodar uma aplicação lambda custa menos do que rodar um servidor em um ec2 (dedicado);

- Não precisa se preocupar com manutenção do servidor, sistema operacional...

- Escalabilidade mais facil

- Alta disponibilidade

_________
02 -

- Uma Lambda function precisa estar triggerada em algum evento para funcionar

- Configurei um trigger para toda vez que cair algum arquivo no S3 ele dispara a Lamda

