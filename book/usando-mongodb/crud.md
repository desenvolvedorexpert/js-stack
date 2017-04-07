# Comandos CRUD

Vamos conhecer os comandos CRUD do MongoDB e vale resaltar que esses comandos serão bem parecidos com os que vamos utilizar em operações CRUD de nossas aplicações Node.

## CREATE

``` sh
# salvar um usuário
$ db.users.save({ name: 'Lucas' });

# salvar múltiplos usuários
$ db.users.save([{ name: 'Lucas'}, { name: 'Letícia' }]);
```
Ao salvar um documento na coleção ```users``` do banco que você está, você automaticamente criará a base e a coleção caso eles ainda não existam.

## READ

``` sh
# buscar todos os usuários
$ db.users.find();

# buscar um usuário específico
$ db.users.find({ name: 'Lucas' });
```

## UPDATE

``` sh
$ db.users.update({ name: 'Lucas' }, { name: 'Lucas Milesi' });
```

## DELETE

``` sh
# remover todos
$ db.users.remove({});

# remover um
$ db.users.remove({ name: 'Lucas' });
```

Essa é apenas uma visão geral dos comandos que vamos utilizar. A [documentação do MongoDB](https://docs.mongodb.org/manual/crud/#mongodb-crud-operations) é completa e bem detalhada para quem quiser se aprofundar.
