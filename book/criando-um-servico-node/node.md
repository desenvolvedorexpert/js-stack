# Método #1: Apenas Node, sem Express

Nesse método, vamos usar dois módulos incorporados no próprio *core* do Node. O [módulo HTTP](https://nodejs.org/api/http.html#http_http) é usado para iniciar um servidor HTTP que vai responder as requisições HTTP dos usuários. O [módulo fs](https://nodejs.org/api/fs.html#fs_file_system) é usado para acessar o sistema de arquivos. Vamos precisar ler o arquivo ```index.html``` do sistema de arquivos e eviar ele para o usuário usando o servidor HTTP.

{% method %}
O nosso ```server.js``` nesse ponto fica desse jeito:

Em suma, estamos usando o **módulo http** para criar o servidor e o **módulo fs** para pegar o arquivo index e envia-lo na responsta para o usuário.

{% common %}
```js
// vamos importar os módulos http e filesystem
const http = require('http'), fs = require('fs')

// então, criamos o servidor http
http.createServer((req, res) => {
  // esse é o cabeçalho da nossa resposta
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin' : '*'
  })
  // leremos o index.html
  let readStream = fs.createReadStream(__dirname + '/index.html')
  // então, enviamos ele para o cliente
  readStream.pipe(res)
}).listen(8000)

// no fim, informamos o endpoint para o usuário
console.log('Visite-me em: http://localhost:8000')
```
{% endmethod %}

{% method %}
Com o arquivo ```server.js``` definido, vamos para linha de comando inicializar o nosso servidor Node HTTP.

{% common %}
```
$ nodemon server.js
```
{% endmethod %}

Veremos o servidor inicializando e a mesnsagem logada no console.

<asciinema-player src="/assets/node-server.json" speed="2" poster="npt:1:15"></asciinema-player>

Agora podemos ver o site no *browser* em ```http://localhost:8000```.

![Falaaa DEV Browser](/assets/localhost-8000.png)

Então, finalmente enviamos um arquivo HTML para nossos usuários! Mas, você pode estar achando que configurar esse servidor HTTP foi um pouco complicado, com muita coisa que você nunca mais vai lembrar. Não se preocupe com isso agora, a maneira como o Express faz isso é muito mais tranquila.
