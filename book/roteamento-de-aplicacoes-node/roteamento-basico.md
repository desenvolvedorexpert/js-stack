# Roteamento Básico

Já definimos uma rota básica para a _homepage_. O Express permite definirmos rotas diretamente no objeto ```app```. Podemos gerenciar muiltiplas ações HTTP como ```GET```, ```POST```, ```PUT/PATCH``` e ```DELETE```.

Essa é a maneira mais fácial de definir rotas, mas conforme a aplicação vai crescendo, precisaremos organizar melhor essas rotas. Vamos imaginar uma aplicação com uma seção de *admin* e outra de *frontend*, cada uma com suas várias rotas. O Express vai ajudar, a gente, a organizar isso.

Nessas próximas rotas, não vamos retornar views como resposta, apenas mensagens. Isso vai tornar as coisa mais simples e ajudar a focar apenas nas rotas.

## express.Router()

O [express.Router()](http://expressjs.com/api#router) age como uma mini aplicação. Podemos chamar uma instância dele (como fazemos com o Express) e então definir as rotas nele. Vamos ver um exemplo para entender exatamente o que isso significa.

<asciinema-player src="/assets/roteamento-basico.json" speed="2" poster="npt:0:55"></asciinema-player>

{% method %}
Então, vamos adicionar esse código ao ```server.js``` logo depois do ```app.get()```. Isso vai:

1. **chamar uma instância do router**;
2. **criar rotas para ele**;
3. e então **adicionar essas rotas a aplicação principal**.

{% common %}
```js
// 1. chamar uma instância do router
var adminRouter = express.Router()

// 2. criar rotas para ele
// página principal (http://localhost:8000/admin)
adminRouter.get('/', (req, res) => {
  res.send('Eu sou o dashboard!')
})

// página de usuários (http://localhost:8000/admin/users)
adminRouter.get('/users', (req, res) => {
  res.send('Aqui listamos todos os usuários!')
})

// página de posts (http://localhost:8000/admin/posts)
adminRouter.get('/posts', (req, res) => {
  res.send('Aqui veremos todos os posts!')
})

// 3. adicionar essas rotas a aplicação principal
app.use('/admin', adminRouter)
```
{% endmethod %}

Nós chamamos uma instância do ```express.Router()``` e atribuimos a uma variável ```adminRouter```, aplicamos algumas rotas nele e informamos nossa app para usa-las.

Agora podemos acessar o painel administrativo em http://localhost:8000/admin e as sub-páginas em http://localhost:8000/admin/users e http://localhost:8000/admin/posts.

Perceba como podemos configurar um prefixo para as rotas definidas. Se alterarmos a última linha para ```app.use('/app', adminRouter)```, então as rotas que passam a valer serão http://localhost:8000/app/ e http://localhost:8000/app/users.

Isso é bastante poderoso, porque podemos criar multiplos ```express.Router()``` e aplica-los a nossa aplicação. Podento ter rotas básicas, rotas autenticadas e até rotas para API.

Usando o Roteamento, podemos tornar nossa aplicação mais flexível e modular que nunca, criando multiplas instâncias de roteamento e aplicando elas conforme o necessário. Agora, vamos dar uma olhada em como vamos usar um _middleware_ para manipular as requisições.
