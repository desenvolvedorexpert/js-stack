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
