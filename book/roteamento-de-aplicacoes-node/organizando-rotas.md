# Organizando Rotas

Usando o ```Router()```, podemos dividir a aplicação em partes. Isso significa que podemos criar um ```basicRouter``` para o roteamento básico do nosso *frontend*. Podemos, também, ter um ```adminRouter``` para rotas de administração protegidas por uma autenticação.


Roteando nossa aplicação dessa maneira podemos separar cada parte. Isso nos da a flexibilidade que precisamos em aplicações e APIs mais complexas. Dessa maneira, mantemos a aplicação limpa e organizada, movendo cada definição de roteamento para seu respectivo arquivo e apenas o instanciando e passando para o ```app.use()``` dessa maneira:


```js
app.use('/', basicRoutes)
app.use('/admin', adminRoutes)
app.use('/api', apiRoutes)
```


## Rotas com Parâmetros: ```/users/:name```


Para adicionar uma rota com parâmetros na aplicação, precisamos de uma rota tipo ```/admin/users/:name``` onde passamos um nome na URL e a aplicação imprime um "*Faalaaa name!*". Veja como essa rota seria:


```js
// rota com parâmetros (http://localhost:8000/admin/users/:name)
adminRouter.get('/users/:name', (req, res) => {
  res.send('Faalaaa ' + req.params.name + '!')
})
```


Agora quando visitarmos ```http://localhost:8000/admin/users/dev``` veremos um "*Faalaaa dev!*", o ```req.params``` armazena todos os parâmetros passados na requisição.

[Express Router Parameters]

Mais na frente, vamos usar isso para retornar os dados do usuário informado e construir um painel de controle para o gerenciamento de usuários.

Agora, vamos dizer que precisemos validar esse nome de alguma forma. Talvez para ter certeza de que não é um nome impróprio. Então, faríamos isso em um *middleware* e vamos usar um especial pra isso...

## Middleware para Parâmetros: ```.param()```


Vamos usar o *middleware* ```.param()``` do Express. Isso cria um *middleware* que será executado para um parâmetro específico. Nesse caso, para o ```:name``` nessa rota. Novamente, precisamos ter certeza de coloca-lo antes da definição da rota e ficará dessa maneira:


```js
// middleware de validação para 'name'
adminRouter.param('name', (req, res, next, name) => {
  // faça a validação do 'name' aqui
  // validação blah blah
  // logar alguma coisa pra sabermos se funciona
  console.log('validando o nome: ' + name)

  // quando a validação acabar, salve o novo nome na requisição
  req.name = name
  // vá para a próxima coisa a fazer
  next()
})

// roteamento com parâmetro (http://localhost:8000/admin/users/:name)
adminRouter.get('/users/:name', (req, res) => {
  res.send('Faalaaa ' + req.name + '!')
})
```


Agora, quando a rota ```/users/:name``` for acessada, o *middleware* será executado. Dessa forma, podemos executar quaisquer validações e então passar a nova variável a rota ```.get``` armazenando-a no ```req``` (request). Então, podemos acessá-la trocando o ```req.params.name``` pelo ```req.name``` já que pegamos ela do ```req.params.name``` e colocamos no ```req.name``` dentro do *middleware*.

Quando visitarmos ```http://localhost:8000/admin/users/lucas``` no *browser* veremos a requisição logada no console.

[Express Router Parameter Middleware]

O *middleware* para parâmentros é usado para validar os dados enviados para a aplicação. Se precisarmos criar uma API RESTful, precisamos então validar um *token* e garantir que o usuário tem acesso a informação. Até agora, tudo que estamos fazendo em Node nos levará a construção da API RESTful que vai ser o *backend*/*server-side* que falamos no início do curso quando falamos sobre o modelo *client-server*.

A última *feature* do Express que vamos ver é como usar o ```app.route()``` para definir multiplas rotas.

## Rotas de Autenticação: ```app.route()```

Podemos definir as rotas diretamente no ```app```. Isso é parecido com o uso do ```app.get```, mas vamos usar o ```app.route```. Ele é básicamente um atalho para o Express Router. Em vez de chamar ```express.Router()```, usamos o ```app.route``` e começamos a definir as rotas.


Usando o ```app.route``` podemos definir multiplas ações para a mesma rota. E nesse caso, vamos precisar definir uma rota ```GET``` para mostrar o formuláruio de login e uma ```POST``` para processar a autenticação. Isso fica assim:


```js
app.route('/login')
  // exibe o form (GET http://localhost:8000/login)
  .get((req, res) => {
    res.send('this is the login form')
  })
  // processa o form (POST http://localhost:8000/login)
  .post((req, res) => {
    console.log('processing')
    res.send('processing the login form!')
  })
```


Isso define duas ações diferentes para a rota ```/login``` de maneira simples e clara. Isso foi aplicado diretamente em nosso objeto ```app``` no ```server.js```, mas poderia ser definido no objeto ```adminRouter``` que vimos antes.

Essa é uma boa maneira de configurar rotas, já que mantém o código claro e facilida a identificação de onde as rotas são aplicadas. Em breve, vamos desenvolver uma API RESTful e uma das principais coisas que vamos fazer é usar diferentes verbos HTTP para definir as ações na aplicação. Como o ```GET /login``` para prover uma *view* de autenticação enquanto um ```POST /login``` vai processar a autenticação.
