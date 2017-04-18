# Middleware de Roteamento

O Roteamento do Express nos da uma flexibilidade na definição de rotas. Já definimos uma rota e vimos ela em funcionando. Também já falamos sobre _middleware_ no capítulo "[Roteamente de Aplicações](/roteamento-de-aplicacoes-node/middleware.md)".

Agora, vamos logar nossas requisições com o ```console.log()``` adicionando esse _middleware_ ao arquivo ```index.js```.

```diff
diff --git i/code/api/index.js w/code/api/index.js
index 571771b..c015de4 100644
--- i/code/api/index.js
+++ w/code/api/index.js
@@ -41,6 +41,14 @@ app.get('/', (req, res) => {
 // pegando uma instância do express router
 const apiRouter = express.Router()

+// middleware usado por todas as requisições
+apiRouter.use(function (req, res, next) {
+  console.log('foi feita uma requisição para nossa API!')
+  // vamos adicionar mais coisas aqui mais tarde
+  // é aqui que vamos varificar a autenticação dos usuários
+  next() // garantir que vamos para a próxima rota
+})
+
 // roteamento de teste
 // acesse GET http://localhost:8000/api
 apiRouter.get('/', (req, res) => {
```

Então, tudo que precisamos fazer para declarar esse _middleware_ é usar o ```router.use(function())```. A onder que definimos o _middleware_ também é muito importante. Porque ele será executado na ordem que é listado, como vimos antes. Também adicionamos o ```next()``` indicando para aplicação continuar para o próximo _middleware_ e não parar nesse ponto.

Vamos ver como fica esse _log_ quando executamos uma requisição para nossa API:

```bash
 > node index.js
A mágica acontece na porta 8000
foi feita uma requisição para nossa API!
GET /api 200 5.377 ms - 32
```

Essa é a resposta que vamos receber quando fizermos um requisição para nossa API:

```bash
 > http GET http://localhost:8000/api
HTTP/1.1 200 OK
Access-Control-Allow-Headers: X-Requested-With,content-type,Authorization
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 32
Content-Type: application/json; charset=utf-8
Date: Tue, 18 Apr 2017 16:48:58 GMT
ETag: W/"20-SWNkJQXTrrYDpUn/LvOilY/Ibck"
X-Powered-By: Express
{
    "message": "essa é nossa api!"
}
```

---

Usar _middlewares_ dessa maneira é muito poderoso. Podemos validar todas as requisições e garantir que estão seguras e como como esperamos. Podemos disparar um erro caso algo esteja errado, logar informações adicionais e verificar se o usuário possui um token de autenticação válido. Veremos isso mais adiante!
