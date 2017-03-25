# PRIMES: MongoDB

**MongoDB**, que vem da palavra “humongous”, é um banco-de-dados **NoSQL** _open-source_ que armazena documentos no formato **JSON**. Ele é o líder no segmento de bancos **NoSQL** com base na quantidade de pesquisas feitas no Google e vagas postadas em sites como Indeed.com.

> ... e aqui, temos umas das quebras de paradigma mais fortes que essa pilha introduz!

## Mongo vs. MYSQL

**LAMP**, que usa **MYSQL**, tem sido o _Stack_ mais utilizado por vários anos até agora. O que ajudou a popularizar o **MYSQL** que é classificado como um _**banco-de-dados relacional**_.

> Um banco-de-dados relacional armazenas não apenas os dados, mas também o relacionamento entre eles.

## Bancos de Documentos

O **MongoDB**, por outro lado, é classificado como um _**banco-de-dados não relacional**_, ou mais especificamente como um _**banco-de-dados orientado a documentos**_. Isso significa que você define a sua estrutura de dados como quiser. Você faz a estrutura de dados corresponder a sua aplicação e então executa as _queries_. Você pode persistir objetos complexos facilmente em seu banco usando JSON, XML, BSON ou vários outros formatos semelhantes que forem mais adequados a sua aplicação. Podendo até armazenar PDF em alguns casos quando necessário.

O **Banco-de-Dados Orientado a Documentos** é um tipo de **Banco NoSQL** que persiste dados em um documento semi-estruturado (ao contrário das tabelas em bancos relacionais).

{% method %}
A modelagem de dados no **MongoDB** é extremamente flexível. Uma maneira de persistir dados é criando documentos separados e adicionando referências para conectar informações. Como você pode ver o documento "Dev Info" tem as informações básicas e é referenciado pelo documento "Dev Address".

{% common %}
Dev Info
``` json
{
  "id": "1234",
  "name": "Antonio Milesi Bastos",
  "age": "36",
  "type": "expert"
}
```
Dev Address Book
``` json
{
  "dev_id": "1234",
  "city": "rio",
  "state": "rj"
}
```
{% endmethod %}

{% method %}
Outra maneira é incluir a informação de endereço dentro do documento "Dev Info" e agora temos apenas um documento para cada Dev, o que exige menos operações de escrita para atualizar informações sobre um Dev o que é mais performático, assumindo que o seu documento não é muito grande.

{% common %}
``` json
{
     "id": "1234",
     "name": "Antonio Milesi Bastos",
     "age": "36",
     "type": "expert",
     "address": {
          "city": "rio",
          "state": "rj"
     }
}
```
{% endmethod %}

Quando você começa a persistir informações sobre vários Devs, cada um dos documentos pode ser classificado como um item da Coleção de Devs. Uma coleção é um grupo de elementos relacionados e nesse caso, todos terão os mesmos campos com diferentes valores.

Então, vamos para a última parte desse DevStack (_provavelmente o meu favorito_)!
