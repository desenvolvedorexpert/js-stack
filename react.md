# PRIMERS: React
**React** é uma biblioteca JavaScript declarativa, eficiente e flexível para o desenvolvimento de interfaces para usuários.

{% method %}
**React** tem alguns tipos diferentes de componentes, mas vamos começar pelo `React.Component`:

{% common %}
```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>
          Shopping List for {this.props.name}
        </h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

```
Exemplo de uso:

```js
<ShoppingList name="Mark" />
```
{% endmethod %}

Já vou falar dessas _tags_ tipo XML no meio do código. Os componentes dizem ao React o que você quer renderizar - então, o React eficientemente irá atualizar e renderizar apenas os componentes certos quando houver uma atualização nos dados.

Aqui, `ShoppingList` é uma **React component class**, ou um **React component type**. Os componentes tem um parâmetro chamado `props` e retornam uma árvore de componentes para ser renderizada via método `render()`.

O método `render` retorna uma _descrição_ do que você deseja renderizar, então o React pega essa descrição e renderiza na tela. A propósito, o método `render` retorna um **elemento React**, que é uma descrição do que renderizar. A maioria dos desenvolvedores React usam uma sintaxe especial chamada **JSX** que torna mais fácil escrever essas estruturas. O `<div />` é transformado, em tempo de compilação, em `React.createElement('div')`.

{% method %}
O exemplo anterior é equivalente a esse código:

{% common %}
```javascript
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', ...),
  React.createElement('ul', ...)
);
```
{% endmethod %}

Podemos colocar qualquer expressão JavaScript entre chaves dentro do JSX. Cada elemento React é um objeto JavaScript que podemos armazenar em uma variável ou passar como parâmetro pelo programa.

O componente `ShoppingList` renderiza apenas componentes integrados da DOM, mas podemos compor componentes customizados com a mesma facilidade, escrevendo `<ShoppingList />`. Cada componente é encapsulado para que possa operar de forma independente, o que nos permite desenvolver interfaces complexas a partir de componentes simples.
