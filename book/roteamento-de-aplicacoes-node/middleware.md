# Middleware de Roteamento: ```router.use()```

Um *middleware* no Express é a maneira de fazer alguma coisa antes da requisição ser processada. Coisas como verificar se o usuário está autenticado, logar algum dado para análise ou qualquer coisa que precise ser feita antes de devolver uma resposta para a requisição.


Esse é um *middleware* para logar uma mensagem no console a cada requisição. Nele temos uma demonstração de como é criado um *middleware* usando o Express Router. Apenas adicionaremos ele ao ```adminRouter``` que criamos antes. Precisamos ter a certeza de coloca-lo **depois** de declarar o ```adminRouter``` e **antes** da definição das rotas para usuários e posts. Vamos perceber um argumento ```next``` nesse ponto. Essa é a única maneira do Express saber que a função terminou e continuar o _pipeline_ para o próximo *middleware* ou rota definida.


```js
// middleware de roteamento exeutado a cada requisição
adminRouter.use((req, res, next) => {
  // logar cada requisição no console
  console.log(req.method, req.url)
  // continue com o que precisar ser feito e vá para a rota
  next()
})
```


O ```adminRouter.use()``` é usado para definir o *middleware*. Ele vai ser aplicado a todas as requisições que caírem nessa instância do *Router*. Vamos dar uma olhada em ```http://localhost:8000/admin``` e ver o *trace* da requisição no console.

<asciinema-player src="/assets/middleware.json" speed="2" poster="npt:0:39"></asciinema-player>

**A ordem que definimos os middlewares e as rotas é muito importante.** Por convenção, tudo acontece na ordem em que foram definidos. Isso significa que se for definido um *middleware* depois de uma rota, a rota será executada e a requisição encerrada antes da execução do *middleware*.

Mantenha em mente que os *middleware* podem ser usados para muitas coisas. Como verificar se uma informação é válida para um usuário durante ums sessão antes dele continuar.
