# Começando com Node

Vamos iniciar dando uma olhada em como começar a desenvolver uma aplicação Node.js. Então, nós vamos passar por como configurar uma aplicação Node.js, instalando pacotes ```npm``` e indo até a criação de uma aplicação bem simples.

## Configuração (package.json)

Aplicações Node são configuradas em um arquivo ```package.json```. Você vai ter um arquivo para cada projeto que você criar.

{% method %}
Nesse arquivo é onde você configura o nome do seu projeto, a versão, o repositório, o autor e todas as dependências importantes.

Pode parecer muita informação num primeiro momento, pode ser que sim para alguns DEVs pode ser que não para outors. Mas as chances são que essas informações vão facilitar e muito a vida de outros desenvolvedores que participarem do seu projeto.

Veja como fica um exemplo desse arquivo:

{% common %}
``` json
{
  "name": "mean-zero2expert",
  "version": "1.0.0",
  "description": "Do ZERO ao Expert com MEAN Stack",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/desenvolvedorexpert/mean-zero2expert.git"
  },
  "dependencies": {
    "express": "latest",
    "mongoose": "latest"
  },
  "author": "Antônio Milesi Bastos",
  "license": "MIT",
  "homepage": "https://desenvolvedorexpert.github.io/mean-zero2expert"
}
```
{% endmethod %}

{% method %}
Nós vamos entender melhor cada uma dessas entradas até o final desse livro. Mas, nesse primeiro momento, vamos focar nesses primeiros dois atributos que são o mínimo requerido.

{% common %}
``` json
{
 "name": "mean-zero2expert",
 "main": "index.js"
}
```
{% endmethod %}

O atributo ```main``` informa para o Node qual arquivo usar para inicializar a sua aplicação. Chamaremos esse arquivo de ```index.js``` e é aqui que vamos começar a nossa aplicação.

Para mais informações sobre quais atributos podemos usar no ```package.json``` de uma olhada em na [documenteção do package.json](https://docs.npmjs.com/files/package.json).
