# Aplicação de Exemplo

Nesse capítulo, vamos enviar um HTML para o *browser* usando o **Método #1** e o **Método #2**. Para começar, precisamos de uma nova pasta com os seguintes arquivos:

{% asciitree %}
http-server
- index.js
- index.html
- package.json
{% endasciitree %}

Como vimos no [capítulo anterior](comecando-com-node/README.md#configuração-packagejson), o ```package.json``` contém as configurações e *packages* do nosso projeto. Enquanto o ```index.js``` contém as rotinas de inicialização e configuração do serviço. O ```index.html``` é um arquivo HTML básico.

Os arquivos ```package.json``` e ```index.html``` serão os mesmos para os dois métodos. O único arquivo que vamos alterar entre os dois métodos é o ```index.js``` porque é nele que vamos inicializar o nosso serviço Node.

Então vamos criar esses arquivos seguindo os templates aqui a baixo.

<asciinema-player src="/assets/http-server.json" speed="2" poster="npt:0:40"></asciinema-player>

## package.json

{% method %}
Entre outras informações, nosso arquivo ```package.json``` vai parecer com este:

{% common %}
``` json
{
  "name": "http-server",
  "main": "index.js"
}
```
{% endmethod %}

## index.html

{% method %}
Vamos escrever um simples arquivo .html como esse:

{% common %}
``` html
<!DOCTYPE html>
<html lang="pt">
  <head>
  <meta charset="UTF-8">
  <title>EXPERT JS Stack</title>
  <style>
    body {
      text-align:center;
      background:#EFEFEF;
      padding-top:50px;
    }
  </style>
  </head>
  <body>
    <h1>Faaala DEV!</h1>
  </body>
</html>
```
{% endmethod %}
