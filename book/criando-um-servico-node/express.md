# Método #2: Usando Express

Agora que já vimos como iniciar um servidor usando o módulo HTTP, vamos dar uma olhada em como o Express faz isso. Você vai achar o código muito mais simples.
{% method %}
Primeiro precisamos adicionar o Express no projeto. Vamos usar a linha de comando para instalar e salvar ele em nosso ```package.json```.

{% common %}
```
$ npm install express --save
```
{% endmethod %}

{% method %}
Então, vamos atualizar o ```server.js``` para usar o Express. Começamos instanciando o Express e usando essa instância, definimos uma rota e enviamos o ```index.html```. Então ficamos "escutando" uma porta para responder as requisições do *browser*.

{% common %}
```js
// vamos começar, carregando o express e criando a app
const app = require('express')()
const path = require('path')

// então, criamos uma rota para '/'
app.get('/', (req, res) => {
  // aqui precisamos enviar o index.html para o cliente
  res.sendFile(path.join(__dirname + '/index.html'))
})

// no fim, iniciamos o serviço na porta 8001
app.listen(8001)
console.log('8001 é a porta mágica!')
```
{% endmethod %}

Agora, instanciamos o Express, definimos uma porta e iniciamos o servidor. O Express tornou o trabalho de iniciar o servidor bem simples. Iniciando o servidor com ```nodemon server.js``` ele vai retornar novamente o HTML para os usuários, agora em ```http://localhost:8001```.

<asciinema-player src="/assets/express-server.json" speed="2" poster="npt:1:03"></asciinema-player>

Veremos o mesmo resultado que antes, mas agora o código está bem mais simples.

![Falaaa DEV Browser](/assets/localhost-8001.png)

---

## Atalhos para Definição de Packages

{% method %}
Uma boa dica é que quando estiver declarando os *packages*, ao invés de escrever ```const``` para definir cada *package*, podemos separalos com uma vírgula. Como no exemplo:

Isso vai organizar o código melhor e poupar algumas teclas.

{% common %}
``` javascript
const app = require('express')()
const path = require('path')

// é o mesmo que isso

const app = require('express')(),
      path = require('path')
```
{% endmethod %}

---

Até agora, já podemos criar um servidor Node e enviar arquivos HTML para os usuários. Definimos uma rota ```get``` simples para isso. Então, vamos dar mais um passo e adicionar mais rotas e páginas ao nosso site.
