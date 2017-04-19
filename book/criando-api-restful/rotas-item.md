# Criando Rotas para um item

No último capítulo, gerenciamos um conjunto de rotas para o _endpoint_ ```/users```. Agora, vamos criar rotas com parâmetros como o ```id``` do usuário.

O que precisarémos para essa é: quando a requisição for para ```/users/:id```;

- Returnar o usuário
- Atualizar o usuário
- Apagar o usuário

O ```:id``` vindo na requisição pode ser acessado graças ao pacote ```body-parser``` que configuramos anteriormente.

## Retornando o usuário: GET ```api/users/:id```

Vamos adicionar essa rota, no ```index.js```, para lidar com requisições com o parâmetro ```:id```.

```javascript
// rotas terminadas em /users/:id
// ----------------------------------------------------
apiRouter.route('/users/:id')
  // returna o usuário com o id (GET http://localhost:8000/api/users/:id)
  .get(function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) res.send(err)
      // retorna o usuário
      res.json(user)
    })
  })
```

Em nosso _endpoint_ que lista os usuários, todos têm um id único. Vamos pegar um desses ids e testar nosso novo _endpoint_ fazendo uma requisição como essa:

```bash
 > http GET http://localhost:8000/api/users/58f10688a2382ab2f06e5030
HTTP/1.1 200 OK
{
  "__v": 0,
  "_id": "58f10688a2382ab2f06e5030",
  "name": "Antonio Milesi",
  "username": "milesibastos"
}
```

Vamos receber o usuário como resposta e no outro terminal que está rodando o serviço ```node index.js``` vamos perceber o _log_ da requisição parecido com esse ```GET /api/users/58f10688a2382ab2f06e5030 200 36.884 ms - 85```.
