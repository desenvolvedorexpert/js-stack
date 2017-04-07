# Como começar

Vamos começar dando uma olhada nos arquivos que precisamos para criar nossa API. Vamos precisar instalar alguns _packages_ Node, iniciar o servidor HTTP usando o Express, definir o modelo, declarar as rotas no Express e, então, testar nossa API.

Essa vai ser nossa estrutura de arquivos. Não vamos precisar de muitos arquivos e manteremos tudo bem simples para demonstração. Quando formos para uma aplicação maior ou de produção vamos separar as coisas em uma estrutura melhor, como manter os roteamentos em um arquivo separado. Vamos falar mais sobre estrutura de arquivos e melhores práticas mais tarde.

{% asciitree %}
api/
- models/
-- user.js      # nosso modelo para usuário
- node_modules/ # criado pelo npm. contêm as dependências/packages
- package.json  # definições da app e suas dependências
- index.js     # configura a app e cria as rotas
{% endasciitree %}

Então vamos iniciar uma nova aplicação Node como vimos em [Inicializando uma Aplicação Node](comecando-com-node/inicializando-um-app-node.md) e instalar alguns _packages_ para começar.

<asciinema-player src="/assets/api-init.json" speed="2" poster="npt:1:20"></asciinema-player>

Usamos a seguinte sequencia de comandos:

```bash
> npm init
> npm install --save express morgan mongoose body-parser bcryptjs
```

Nosso ```package.json``` vai parecer com esse:

```json
{
  "name": "api",
  "version": "0.1.0",
  "description": "API RESTful com Express",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "api",
    "express"
  ],
  "author": "@milesibastos",
  "license": "MIT",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "mongoose": "^4.9.3",
    "morgan": "^1.8.1"
  }
}
```

## O que esses *packages* fazem?

- [express](https://www.npmjs.com/package/express) como vimos nos [PRIMERS](comecando/expressjs.md), é um framework web para node
- [morgan](https://www.npmjs.com/package/morgan) é um _middleware_ de log para exibir nossas requisições no console.
- [mongoose](https://www.npmjs.com/package/mongoose) é o ODM que vamos usar para conectar no [MongoDB](https://www.mongodb.com/).
- [body-parser](https://www.npmjs.com/package/body-parser) outro _middleware_, esse vai fazer o _parse_ das requisições para o formato JSON.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) nos permite fazer o _hash_ das senhas já que nunca é uma boa ideia armazena-las como texto direto no banco.

O NPM baixou e instalou todos os _packages_ na pasta ```node_modules``` em nosso projeto. Simple e fácil. Agora que já temos os _packages_ instalados vamos em frente e usa-los para configurar nossa API.

Vamos da uma olhada no ```index.js``` para confirgurar nossa API já que ele é o _main file_ que declaramos no ```package.json```.
