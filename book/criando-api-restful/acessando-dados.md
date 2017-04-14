# Acessando Dados no MongoDB

Vamos manter essa parte simples e rápida para que possamos ir à parte mais divertida de escrever as rotas da nossa API. Tudo que precisamos é criar uma instância do MongoDB e conectar nossa aplicação nele. Também vamos criar um modelo no ```mongoose``` e então usar ele para conectar no MongoDB.

Já vimos como criar nossa instância local do MongoDB na parte "[Provisionado o MongoDB Localmente](usando-mongodb/provisionado-mongod.md)" desse livro. Também já vimos como usar em "[Usando o MongoDB em uma Aplicação NodeJS](usando-mongodb/usando-com-node.md)". Agora vamos juntar tudo isso e conectar nosso modelo mongoose com MongoDB.

Você pode criar uma instância do MongoDB e mapear sua porta ```27017``` para conectar nele da seguinte maneira:

```bash
> docker run --name mongodb -d -p 27017:27017 mongo
```

<asciinema-player src="/assets/acessando-dados.json" speed="2" poster="npt:0:29"></asciinema-player>

## Criando a Conexão com o MongoDB

Com a instância do MongoDB criada, nossa URI de conxão será como ```mongodb://user:pass@localhost:27017/myDatabase```. Composta pelo _host_ ```localhost```, porta ```27017```, o nome da base ```myDatabase``` e eventualmente o usuário e senha de conexão.

Já instalamos o ```mongoose``` antes, quando usamos o ```npm install```, agora precisamos conectar em nossa base MongoDB. Vamos adicionar essa URI de conexão em nossa aplicação adicionando essa linha no ```index.js```.

```js
mongoose.connect('mongodb://localhost:27017/myDatabase')
```
