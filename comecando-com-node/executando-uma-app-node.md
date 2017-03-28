# Executando uma Aplicação Node

{% method %}
O arquivo ```index.js``` é o que nós definimos como princial no arquivo ```package.json``` e então o que usaremos quando iniciar. O servidor será parado automáticamente quando terminar de execuar o comando ```console.log```, mas no futuro você vai precisar usar ```ctrl c``` para parar o servidor Node.

Para iniciar uma Aplicação Node, você só precisa digitar:

{% common %}
``` sh
$ node index.js
```
{% endmethod %}

## Reiniciando uma Aplicação Node Quando o Arquivo Mudar

Por padrão, o comando ```node index.js``` vai iniciar a sua aplicação, mas não vai reiniciar quando você fizer alguma atualização no arquivo. Isso pode ser chato quando você está desenvolvendo e precisa parar e reiniciar a aplicação toda vez que precisa aplicar uma alteração.

{% method %}
Felizmente temos um pacote ```npm``` que vai monitorar e reiniciar quando mudanças forem identificadas. Esse pacote é o [nodemon](http://nodemon.io/) e para intalar basta seguir o comando a seguir.

O ```-g``` significa que o pacote vai ser instalado globalmente no seu sistema.

{% common %}
``` sh
$ npm install -g nodemon
```
{% endmethod %}

{% method %}
Agora, em vez de usar ```node index.js``` vamos usar o seguinte comando.

{% common %}
``` sh
$ nodemon index.js
[nodemon] 1.8.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
Falaaa DEV! Essa é nossa primeira Aplicação Node...
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Falaaa DEV!
[nodemon] clean exit - waiting for changes before restart
```
{% endmethod %}

Então quando qualquer alteração for identificada o servidor vai reiniciar como na mensagem a cima. Daqui em diante, por uma questão de praticidade, vamos usar o ```nodemon``` quando precisarmos executar a palicação..

---
Até agora, configuramos uma Simples Aplicação Node e iniciamos via linha comando. Estamos um passo mais perto de construir uma Aplicação Node para mostrar ao mundo. Mas antes, precisamos conhecer o ecosistema de gerenciamentos de pacotes do Node. O [NPM](https://www.npmjs.com)!
