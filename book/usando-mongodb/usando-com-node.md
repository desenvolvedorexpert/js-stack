# Usando o MongoDB em uma Aplicação NodeJS

Vimos que usar uma instâcia local do MongoDB é bem simples. Então fique a vontade para usar sua instância local ou criar uma instância hospedada em um serviço como [modulus.io](https://modulus.io/) ou [mongolab.com](https://mongolab.com/).

De qualque maneira, vamos usar um pacote Node chamado [mongoose](http://mongoosejs.com/)
para trabalhar com o MongoDB em nossa aplicação.

Tudo que precisamos fazer é configurar o mongoose para conectar em nossa base. Esse é um processo bem simples já que nem precisamos criar explicitamente um banco de dados. Trabalhando localmente, apenas precisamos ter certeza de ter iniciado o MongoDB com o comando:

``` sh
$ docker run --name mongodb -d mongo
```

## Conectanto ao MongoDB com o Mongoose

Conectar em uma instância MongoDB com o mongoose é um processo bem simples.

``` javascript
// carregue o package do mongoose
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_name');
```
Está feito! Agora é só começar a persistir informações em sua base de dados ```db_name``` que será criada automaticamente.

Agora que já entendemos como usar o MongoDB e implementar operações CRUD usando o mongoose em uma aplicação Node. **Vamos criar nossa API Node.**
