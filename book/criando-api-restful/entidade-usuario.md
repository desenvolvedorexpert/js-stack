# Definindo a Entidade Usuário

A melhor maneira de entender o ```mongoose``` é usando ele. Então vamos criar uma entidade usuário e definir alguns campos. Crie o arquivo ```domain/user.js``` e defina sua entidade dessa maneira.

```js
// importando os packages que precisamos
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

// schema
const UserSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true,
    select: false
  }
})

// gerar o hash do password antes de salvar
UserSchema.pre('save', function (next) {
  const user = this

  // gerar o hash apenas se o password mudou o para um novo usuário
  if (!user.isModified('password')) { return next() }

  // gerando o hash
  const hash = bcrypt.hashSync(user.password)

  // trocando o password pelo hash
  user.password = hash
  next()
})

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function (password) {
  const user = this
  return bcrypt.compareSync(password, user.password)
}

// exportando a entidade
module.exports = mongoose.model('User', UserSchema)

```

Então, parece que tem bastante coisa acontecendo aqui, mas é tudo bem simples. Estamo apenas criando um Schema para a entidade usuário. Definimos os campos ```name | username | password``` como ```String```. Dessemos para o ```mongoose``` criar um índice único configurando os atributos ```index``` e ```unique``` para ```username```. Isso significa que não podemos ter nomes de usuário duplicados. Outra _feature_ que usamos, é a ```select: false``` no password. Uma _query_ em usuários não vai retornar esse campo, a não ser que ele seja explicitamente solicitado.

Também criamos uma função usando ```pre``` para garantir que a senha seja convertida em _hash_ antes de ser salva.

> É sempre importante ter a certeza de que não estamos salvando senhas como text no banco. Temos que garantir que nossa aplicação é segura desde o início.

Com o ```mongoose```, também podemos criar um método para comparar a senha com o hash e autenticarmos o usuário no futuro.

Com nossa entidade criada, vamos importa-la em nosso ```index.js```, dessa maneira, para usarmos em nossa aplicação.

```js
const User = require('./domain/user')
```

Agora nossa aplicação está pronta e conectada para construirmos nossas rotas. Essas rotas definirão nossa API e são a principal razão desse capítulo existir... Então, vamos lá!
