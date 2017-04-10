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
var apiRouter = express.Router()

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
