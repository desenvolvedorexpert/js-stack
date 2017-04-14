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
