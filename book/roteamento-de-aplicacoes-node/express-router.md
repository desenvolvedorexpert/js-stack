# Express Router

O que exatamente é o *Express Router*? Podemos considerar ele como um mini Express sem todas suas features, apenas o roteamente. Então ele não traz configurações ou views, mas provê as APIs de roteamento como ```.use()```, ```.get()```, ```.param()``` e ```route()```. Vamos dar uma olhada no que isso siginifica.

Temos diferentes maneiras de usar o roteamento. Usamos uma delas quando criamos o roteamento para a _home_, do [último capítulo](criando-um-servico-node/express.md), usando o ```app.get('/', ...)```. Vamos ver mais alguns métodos desenvolvendo outras seções para o nosso site e discutir quando e porque usá-los.

## Features da Aplicação de Exemplo

Essas serão as principais _features_ que vamos adicionar a nossa aplicação:

* Roteamento Básico (Como criamos para a _homepage_)
* Roteamento para Seções do Site (Seção Admin com sub-rotas)
* Rota com _Middleware_ para _log_ de requisições no console
* Rota com Parâmetros (http://localhost:8001/users/lucas)
* _Middleware_ para Rota com validação de Parâmetros
* Roteamento para _Login_ com ```GET``` e ```POST``` no ```/login```
* Validação de parâmetros passados em uma rota

### O que é um _Middleware_ de Roteamento?

Um _Middleware_ de roteamento é invocado entre a requisição do usuário e a resposta dessa requisição. Vamos usar esse conceito quando precisarmos logar no console os dados de cada requisição. O usuário solicita uma página, vamos logar essa requisição no console (com um _middleware_) e responder com a página solicitada. Veremos mais sobre isso em breve.

Como temos feito até agora, manteremos nossas rotas no ```server.js``` e não vamos precisar de nenhuma alteração no ```package.json``` já que o Express está instalado.
