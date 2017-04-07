# Criando APIs RESTful com Node

## O que é REST?

Uma ótima referência sobre APIs RESTful é o [hangout feito por Brian Mulloy](https://youtu.be/QpAhXa12xvU).

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/QpAhXa12xvU?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

---

APIs RESTful estão se tornando um padrão entre serviços na web. Não estamos apenas desenvolvendo aplicações. Agora, estamos nos movendo em direção a plataformas que podem se integrar com vários dispositivos e sites.

A interconectiviade está rápidamente se tornando o nome do jogo. Com projetos como [IFTTT](https://ifttt.com) e [Zapier](https://zapier.com/) ganhando popularidade, os usuários estão mostrando que querem todos os seus aplicativos conectados. Isso significa que todas as aplicações têm uma maneira padrão de "falar" umas com as outras. IFTTT permite que você defina gatilhos e respostas como "Quando eu tweetar, compartilhe no meu facebook". E as APIs do Twitter e do Facebook nos permitem fazer isso.

Os grandes players como Facebook e Google têm suas próprias APIs que são usadas por vários componentes de terceiros. Podemos acessar suas "API Explorer" onde podemos fazer um *test-drive* e ver que tipo de informações podemos extrair dessas APIs. Por exemplo, uma vez que você se logou no Facebook, pode pegar as informações sobre você e os seu amigos no [API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=me&version=v2.5). O uso de APIs se tornou rapidamente um padrão no desenvolvimento de aplicações.

Não é mais suficiente termos aplicações *standalone*, precisamos desenvolver um website e multiplos aplicativos *mobile* consumindo o mesmo dado. Quando a nossa aplicação decolar no mercado, vamos querer que os usuários sejam capazes de compartilhar seus dados com outros aplicativos. É aqui que entra a nossa API. Vamos aprender a desenvolver uma API usando o Node de maneira que multiplas aplicações passam consumir esses dados.
