# Comandos Comuns de Banco de Dados

_Queries_ em bases de documento, são diferentes das que costumamos fazer em bancos relacionais. Ao invés de fazer uma _query_ selecionando um conjunto de linhas de uma tabela, vamos fazer _queries_ sobre coleções de documentos.

Já que tudo é persistido em JSON, a sintaxe será bem parecida com a maneira como lidamos com esses objetos em nossas aplicações. Uma vez que conectarmos na instância do MongoDB usando o ```mongod``` e o ```mongo``` podemos começar a visualizar os dados disponíveis.

Vamos, então, a alguns dos comandos mais comuns para manipular essa base de dados.

## Listar as Bases de Dados

``` sh
> show databases
```

## Listar as Coleções

``` sh
> show collections
```

## Criar uma Base de Dados

**O MongoDB não cria uma base de dados até que você insira alguma informação nela.**

Isso significa que você não precisa se preocupar em criar explicitamente uma nova base de dados. Você pode simplesmente usa-lá, mesmo que ela aina não exista, criando coleções e documentos e tudo será resolvido automaticamente.

Vamos ver mais sobre a criação de coleções e documentos, daqui a pouco, quando falarmos dos comando CRUD.

## Mostar a Base de Dados Atual

``` sh
> db
```

## Mudar para uma Base de Dados

``` sh
> use db_name
```

Agora que já conhecemos os comandos básicos, vamos aos comandos CRUD principais.
