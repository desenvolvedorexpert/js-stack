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
