# Criando Rotas Básicas

Agora vamos criar rotas para **retornar os usuários** e **criar um usuário**. Esses comandos usarão a rota ```/api/users```. Vamos começar criando usuários e então teremos usuários para listar.

## Criando usuários: POST ```/api/users```

Vamos adicionar essa nova rota para lidar com as requisições POST feitas para nossa API em ```/api/users```.

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

Agora que criamos uma rota POST para ```/api/users``` em nossa aplicação, temos o ```apiRouter.route()``` gerenciando multiplas rotas para a mesma URI, todas as requisições terminado em ```/users```.

Então vamos criar um usuário. Vamos executar um POST para ```/api/users``` dessa maneira.

```bash
> http --form POST localhost:8000/api/users name='Antonio Milesi' username='milesibastos' password='devexpert'
HTTP/1.1 200 OK
{
  "message": "Usuário criado!"
}

# POST /api/users 200 116.040 ms - 30
```

Podemos verificar a mensagem de confirmação da criação de um novo usuário e, também, no console que está executando o serviço ```node index.js``` o _log_ da requisição ```POST /api/users 200 116.040 ms - 30```.

Se o usuário já existir, o mongoose vai disparar um erro ```11000``` que estamos tratando no código e o retorno será parecido com esse:

```bash
HTTP/1.1 200 OK
{
  "message": "Um usuário com esse username já existe.",
  "success": false
}
```

## Retornando os usuários: GET ```/api/users```

Esta será um rota bem simples que vamos adicionar ao ```index.js``` assim como fizemos para o POST. Com o ```router.route()``` podemos manipular diferentes Verbos HTTP, isso mantem nossa aplicação limpa e organizada.

```js
// rotas terminadas em /users
// ----------------------------------------------------
apiRouter.route('/users')
  // criar usuário (POST http://localhost:8000/api/users)
  .post(function (req, res) { ... })
  // returna todos os usuários (GET http://localhost:8000/api/users)
  .get(function (req, res) {
    User.find(function (err, users) {
      if (err) res.send(err)
      // retorna os usuários
      res.json(users)
    })
  })
```

Agora basta enviar uma requisição GET para ```http://localhost:8000/api/users``` e receberemos todos os usuário em formata JSON na resposta.

```bash
 > http GET http://localhost:8000/api/users
HTTP/1.1 200 OK
[
  {
    "__v": 0,
    "_id": "58f10688a2382ab2f06e5030",
    "name": "Antonio Milesi",
    "username": "milesibastos"
  }
]
```

Podemos ver que o usuário está no banco MongoDB e a senha é um _hash_ graças ao ```bcryptjs``` e a função que criamos para ser executada sempre que um usuário for salvo. Vale lembra que o ```_id``` é automaticamente gerado aqui e vamos usa-lo para pegar o usuário na próxima rota.
