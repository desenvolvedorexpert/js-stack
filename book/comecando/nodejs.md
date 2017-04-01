# PRIMERS: Node.js

O [**Node.js**](https://nodejs.org/) é construído sobre o [_**Google Chrome V8 JavaScript runtime**_](https://developers.google.com/v8/) e roda no servidor de aplicação. Então, o que isso significa? Em um **LAMP Stack** você tem um servidor de aplicação (**Apache**, **Ngimx** e etc) rodando com sua linguagem de servidor (**PHP**, **Perl** ou **Python**) para criar um aplicativo dinâmico. O código no servidor é usado para criar o ambiente da aplicação extraindo os dados do banco **MySQL** e gerando as páginas no servidor.

Quando uma nova requisição é feita, o **Apache** cria uma nova _thread_ ou processo para gerenciar essa requisição e isso o torna _multithread_. Muitas vezes você terá uma série de processos ociosos aguardando uma nova requisissão. Se você configurou o servidor para ter apenas 50 processos ociosos e receber 100 requisições, alguns usuários podem receber _timeout_ em suas requisições até algum desses processos serem liberados. É claro que existem outras maneiras de lidar com essa escalabilidade de maneira mais eficiente, mas em geral o **Apache** usará uma _thread_ por requisição e para suportar mais usuários, eventualmente você precisará de mais servidores.

## Multithreading

Esse é um modelo de programação onde o fluxo do programa tem múltiplas _threads_. Diferentes partes do programa (_threads_) serão capazes de executar simultaneamente e de maneira independente, em vez de esperar cada evento para terminar. Isso é bom para quem não precisa esperar cada evento terminar antes de começar a ver alguns resultados, mas novas _threads_ exigem mais memória, de modo que esse desempenho vem com um _trade-off_ de memória.

> … e aqui é onde o **Node** brilha.

O **Node** é orientado a eventos e desempenha o mesmo papel que o **Apache**. Ele irá interpretar o código do lado do servidor para gerar a página web. Eles são semelhantes onde cada conexão dispara um novo evento, mas a principal diferença é que o **Node** é assíncrono e _single thread_. Em vez de usar várias _threads_ ociosas esperando eventos para processar, o **Node** usa apenas uma _thread_ para lidar com todas as requisições.

Embora isso possa parecer ineficiente, à primeira vista, isso realmente funciona bem, devido a natureza assíncrona do **Node**.

> Vamoes entender melhor como isso funciona...

## Programação Orientada a Eventos

Nesse tipo de programação o fluxo do programa é orientado por eventos específicos como _clicks_ de _mouse_, pressionamento de teclas e etc. A maioria das interfaces de usuário são baseadas em eventos e essa técnica de programação pode ser implementada em qualquer linguagem.

### Programação Assíncrona

Na programação assíncrona, eventos assíncronos são executados independentemente do fluxo do programa principal. Ao invés de não fazer nada enquanto espera por um evento, o programa vai colocar o evento na fila do manipulador de eventos e continuar com o fluxo do programa principal. Quando o evento estiver pronto, o programa irá retornar para ele, via _callback_, executar o código e retornar para o fluxo principal do programa. Por isso, um programa assíncrono não vai executar de cima pra baixo como normalmente você vê em códigos síncronos.

Pense numa _query_ de banco. Dependendo do quão complexa essa _query_ pode ser ou do volume de dados envolvidos, ela pode demorar alguns segundos para retornar alguma coisa. Quando usamos uma única _thread_, poderia acontecer do usuário não ver nada acontecendo enquanto processamos essa _query_ e isso resultaria em um carregamento lento que prejudicaria o sucesso do seu aplicativo. Mas, felizmente o **Node** lida com múltiplas requisições de maneira muito mais eficiente usando _**callbacks**_.

### Callback Assíncrono

Nesse caso, uma função é passada como argumento para ser executada mais tarde, quando estiver pronta. Os _callbacks_ são usados quando uma função precisa de mais tempo para ser executada.

Existem dois tipos de _**callbacks**_: os **síncronos** e os **assíncronos**.

Os **_callbacks_ síncronos** são considerados **“bloqueantes”** o que significa que o fluxo do seu programa vai parar esperando o retorno dessa função. Por causa de operações com as de I/O que levam algum tempo para terminar, o seu programa pode parecer lento ou congelar para os usuários.

O **Node** usa **_callbacks_ assíncronos**, também conhecidos como **_callbacks_ não bloqueantes**, que permitem a continuidade do fluxo do programa em quanto são executadas operações como as de I/O. Quando a operação estiver concluída, ele vai emitir uma interrupção/_callback_ para avisar ao programa que está pronto para executar e quando terminar, o programa volta para o que estava fazendo. Claro que vários _callbacks_ podem jogar o seu código no caos bem rápido, por isso é que você precisa ter certeza de estar fazendo isso da maneira correta.

# NPM e Packages

Um dos grandes benefícios do **Node** é o seu gerenciamento de pacotes, **npm**. Como o **Ruby** tem **RubyGems**, **PHP** tem **Composer** e o **.Net** tem **NuGet**. O **Node** tem o **NPM**. O **NPM** vem com o **Node** e vai nos permitir pegar uma série de pacotes para atender nossas necessidades.

Os pacotes podem extender as funcionalidades no **Node** e este sistema de pacotes é uma das coisas que faz o **Node** tão poderoso. A capacidade de ter um conjunto de códigos que você pode reutilizar em todos os seus projetos é incrível e torna o desenvolvimento muito mais fácil e ágil.

Múltiplos pacotes podem ser reunidos e integrados para criar uma série de aplicações complexas.

Esses são alguns dos pacotes mais populares usados no **Node**:
 - [ExpressJS](http://expressjs.com/): é atualmente um do mais populares no site [**npm**](https://www.npmjs.com) e nós vamos usa-lo no curso é claro.
 - [Mongoose](http://mongoosejs.com/): é o pacote que vamos usar para interagir com o [**MongoDB**](https://www.mongodb.com/).
 - [GruntJS](https://gruntjs.com/): usado para automação de tarefas.
 - [PassportJS](http://passportjs.org/): para autenticação em vários serviços de media social.
 - [Socket.io](https://socket.io/): para construir aplicações _websocket_ em tempo real.
 - [Elasticsearch](https://www.elastic.co/products/elasticsearch): que provê alta escalabilidade em operações de busca.

# Frameworks

Existem diversos _frameworks_ para **Node**. Nó vamos usar o **Express**, mas os conceitos usados aqui podem ser facilmente transferidos para outro _frameworks_ populares.

Outros _frameworks_ populares são:
 - [HapiJS](https://hapijs.com/): Um _framework_ usado cada vez mais por grandes empresas.
 - [KoaJS](http://koajs.com/): Um fork do **Express**
 - [Restify](http://restify.com/): Se basea na sintaxe do **Express** para criar uma estrutura dedicada à construção de **APIs REST**
 - [Sails](http://sailsjs.com/): um _framework_ com tudo para simular o modelo **MVC**

O **Express** irá lidar com quase todas as tarefas que você precisar e é extremamente robusto e utilizável, além de ter apoio comercial já que foi recentemente comprado/patrocinado pela [StrongLoop/IMB](https://strongloop.com/).

Embora os outros _frameworks_ sejam bons em seus seguimentos, e você deveria conhece-los, nós vamos focar no **Express**.
