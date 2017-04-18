# Express e Rotas

Vamos usar uma instância do `Express Router` para definir e configurar nossas rotas. Essa é uma visão geral das rotas que vamos configurar, o que ela vai fazer e qual Verbo HTTP ela vai usar:

URL            | Verbo HTTP | Descrição
-------------- | :--------: | -------------------------
/api/users     |    GET     | retorna todos os usuários
/api/users     |    POST    | cria um usuário
/api/users/:id |    GET     | retorna um usuário
/api/users/:id |    PUT     | atualiza o usuário
/api/users/:id |   DELETE   | apaga o usuário

Essas são as rotas básicas para uma API e um bom mapeamento dos Verbos HTTP para as ações que precisamos executar.

# Middleware

O Roteamento do Express nos da uma flexibilidade na definição de rotas. Já definimos uma rota e vimos ela em funcionando. Também já falamos sobre _middleware_ no capítulo "[Roteamente do Aplicações](roteamento-de-aplicacoes-node/middleware.md)".

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
