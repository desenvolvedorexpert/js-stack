# Serviços de _Backend_ para nossa Aplicação

Vamos ver agora, como criar uma API RESTful usando Node, Express com seus Roteamentos e Mongoose para interagir com a instância MongoDB. Para testar essa API você pode usar:

- [POSTMAN](http://www.getpostman.com/) no Chrome
- [HTTPie](https://httpie.org/) no seu terminal

Essa será uma aplicação completamente nova e diferente do que vimos até agora e vamos usá-la daqui em diante até chegarmos no React. Vamos dar uma olhada na API que vamos desenvolver e o que ela vai fazer.

## Aplicação de Exemplo

Digamos que vamos contruir uma ferramenta de CRM (Customer Relationship Management). Então ela pracisa ser capaz de gerenciar o CRUD de usuários em nossa base de dados. Vamos focar nos usuários para desenvolver nossa API e depois vamos usar o React para desenvolver o *frontend* que vai consumir essa API de Usuários.

Então a nossa API irá:

* Lidar com as operações CRUD de usuários
* Ter uma URL padrão para http://example.com/api/users e http://example.com/api/users/:id
* Usar os verbos HTTP de maneira RESTful (GET, POST, PUT, and DELETE)
* Retornar dados em JSON
* Logar todas a requisições no console
