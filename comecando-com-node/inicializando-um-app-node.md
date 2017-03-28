# Inicializando uma Aplicação Node

{% method %}
No arquivo ```package.json``` é onde começamos cada aplicação. Mas, eu concordo que no início pode ser difícil lembrar o que colocar nesse arquivo e por isso pessoal do ```npm``` criou um comando fácil de lembrar que vai guiar você nessa tarefa. O comando ```npm init```.

Vamos criar um projeto para testar o comando ```npm init```.

{% common %}
``` sh
$ mkdir expert-js-stack #crie uma pasta pro projeto
$ cd expert-js-stack #entre na pasta
$ npm init #inicialize sua aplicação Node
```
{% endmethod %}

{% method %}
Esse comando vai te dar algumas opções que você pode deixar como padrão ou configurar como quiser. Mas por enquanto, vamos deixar os valores padrão e configurar apenas o ```main (entry point)``` para apontar para o nosso ```index.js```.

Você vai ver que nosso arquivo ```package.json``` foi criado. Ele será parecido com o exemplo e nós teremos o nosso primeiro projeto Node!

{% common %}
``` sh
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (expert-js-stack)
version: (1.0.0)
description: EXPERT JS Stack
entry point: (index.js) index.js
test command:
git repository:
keywords:
author: @milesibastos
license: (ISC) MIT
About to write to ~/devexpert/expert-js-stack/package.json:

{
  "name": "expert-js-stack",
  "version": "1.0.0",
  "description": "Do ZERO ao Expert com MEAN Stack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "@milesibastos",
  "license": "MIT"
}


Is this ok? (yes)
```
{% endmethod %}

Agora que temos o ```package.json``` podemos digitar o comando ```node index.js``` para iniciar nossa app Node! Mas isso vai gerar um erro, por que ainda não criamos o arquivo ```index.js``` que vamos usar para inicializar nosso app Node. Então agora, vamos resolver isso!
