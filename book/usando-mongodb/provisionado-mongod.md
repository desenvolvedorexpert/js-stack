# Provisionado o MongoDB Localmente

Existem alguns passos que vamos precisar conhecer para usar o MongoDB localmente. Para tornar o processo mais simples e uniforme em todos os sistemas operacionais vamos usar um _docker_ para provisionar o nosso banco MongoDB.

Para instalar e configura o Docker corretamente [de uma olhada no capítulo "Instalação"](http://stack.desenvolvedor.expert/appendix/docker/instalacao.html) do apêndice Docker que traz o livro "Docker para Desenvolvedores" escrito pelo grande [Rafael Gomes](https://twitter.com/gomex) também conhecido como "gomex". O Gomex é mais uma das incríveis pessoas que conheci quando trabalhava na Thoughtworks e ele é uma das maiores autoridades que conheço no assunto.

Com o Docker funcionando em nosso ambiente de desenvolvimento, o processo se resume a basicamente dois comando:

Executar o _container_ do MongoDB.

```bash
> docker run --name mongodb -d mongo
```

Então, executar o _container_ do Docker Express que provê uma interface http para acessarmos o MongoDB.

```bash
> docker run -it --rm --link mongodb:mongo -p 8081:8081 mongo-express
```

Para conectar via terminal nessa instância execute o comando:
```bash
> docker run -it --link mongodb:mongo --rm mongo sh -c 'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test"'
```


Então vamos dar uma olhada em alguns comandos básicos para lidar com MongoDB.
