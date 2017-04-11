# Configurando o Serviço HTTP

O vai executar o arquivo `index.js` quando iniciar o serviço, então vamos ver como configurar nossa API.

Vamos começar com o básico para iniciar o nosso serviço. Manterei o código simples e comentado para te ajudar a entender o que está acontecendo no caminho.

```javascript
// CONFIGURAÇÃO BÁSICA
// ======================================

// IMPORTANDO OS PACKAGES --------------------
const express = require('express') // importando o express
const app = express() // definindo nosso app para usar o express
const bodyParser = require('body-parser') // importando body-parser
const morgan = require('morgan') // vamos usar para logar as requests
const mongoose = require('mongoose') // para trabalhar com nossa database
const port = process.env.PORT || 8000 // configurando a porta do serviço

// CONFIGURANDO O SERVIÇO ---------------------
// usando o parser para pegar a informação do POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// configurando as chamadas CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
  next()
})

// logando as requisições no console
app.use(morgan('dev'))

// ROTAS PARA API
// =============================

// rota básica para home page
app.get('/', (req, res) => {
  res.send('Bem-vindo à home page!')
})

// pegando uma instância do express router
const apiRouter = express.Router()

// roteamento de teste
// acesse GET http://localhost:8000/api
apiRouter.get('/', (req, res) => {
  res.json({ message: 'essa é nossa api!' })
})

// mais rotas devem ser configuradas aqui

// REGISTRANDO AS ROTAS -------------------------------
// as rotas serão prefixadas com /api
app.use('/api', apiRouter)

// INICIANDO O SERVIÇO
// ===============================
app.listen(port)
console.log('A mágica acontece na porta ' + port)
```

UAU! Fizemos bastante coisa aqui! É tudo bem simples, então vamos dar uma olhada.

**Configuração Básica**: Na configuração básica, nós importamos os _packages_ que instalamos via ```npm```. Importamos o ```express```, ```mongose```, definimos nossa ```app```, setamos o ```bodyParser``` e configuramos nosso serviço para usar ele. Também podemos setar uma porta para nosso serviço e configuramos as permissões para permitir requisições de outros domínios e evitar erros CORS.

**Rotas para nossa API**: Nesse ponto configuramos as rotas. O Express Router nos permite acessar uma instânica do roteador. Podemos então, definir novas rotas e aplica-las a rota principal. Definimos também uma rota para a _home page_ que responde com um "Olá"; essa é apneas uma rota para garantir que está tudo funcionando corretamente.

**Iniciando o Serviço**: Aqui teremos nosso serviço ```express``` escutando na porta que definimos. Então nosso serviço está vivo e agora podemos testá-lo.
