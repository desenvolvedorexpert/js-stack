# Criando Rotas Básicas

Agora vamos criar rotas para **retornar os usuários** e **criar um usuário**. Esses comandos usarão a rota ```/api/users```. Vamos começar crindo usuários e então teremos usuários para listar.

## Criando usuários: POST ```/api/users```

Vamos adicionar essa nova rota para lidar com as requisições POST feitas para nossa API.

```js
// rotas terminadas em /users
// ----------------------------------------------------
apiRouter.route('/users')
// criar usuário (POST http://localhost:8000/api/users)
  .post(function (req, res) {
    // criar uma nova instância do Usuário
    var user = new User()
    // informações do usuário (na request)
    user.name = req.body.name
    user.username = req.body.username
    user.password = req.body.password
    // salvar e verificar erros
    user.save(function (err) {
      if (err) {
        // usuário duplicado
        if (err.code === 11000) {
          return res.json({
            success: false,
            message: 'Um usuário com esse username já existe.'
          })
        } else {
          return res.send(err)
        }
      }
      res.json({ message: 'Usuário criado!' })
    })
  })
```

Agora que criamos uma rota POST para nossa aplicação, temos o ```apiRouter.route()``` gerenciando multiplas rotas para a mesma URI, todas as requisições terminado em ```/users```.

Então vamos criar um usuário. Vamos executar um POST para ```/api/users``` dessa maneira.

```bash
> http --form POST localhost:8000/api/users name='Antonio Milesi' username='milesibastos' password='devexpert'
HTTP/1.1 200 OK
{
    "message": "Usuário criado!"
}

# POST /api/users 200 116.040 ms - 30
```

Podemos verificar a mensagem de confirmação da criação de um novo usuário e no console que está executando o serviço ```node index.js``` o _log_ da requisição ```POST /api/users 200 116.040 ms - 30```.

Se o usuário já existrir, o mongoose vai disparar um erro ```11000``` que estamos tratando no código e o retorno será parecido com esse:

```bash
HTTP/1.1 200 OK
{
    "message": "Um usuário com esse username já existe.",
    "success": false
}
```
