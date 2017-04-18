# Gerenciamento de Pacotes

Os _packages_ estendem as funcionalidades de nossa aplicação. Como vimos quando falamos sobre os [PRIMERS](/comecando/conhecendo_os_primers.html), uma das partes desse Full-Stack JavaScript, Express, é um _package_ Node.

Vamos ver como adicionar e instalar esses _packages_. E depois disso vamos passar para os outros componentes desse Full-Stack.

## Instalando Packages

O arquivo ```package.json``` é onde configuramos o nome da aplicação e qual arquivo usar na inicialização. Vai ser nele também que vamos definir os _packages_ que precisamos.

Existem, basicamente, duas maneiras de adicionar _packages_ ao nosso projeto:

* escrevendo direto no arquivo ```package.json```
* instalando via linha de comando

### Método #1: Escrevendo Direto no Arquivo package.json


Esse é um arquivo ```package.json``` com a dependência do Express adicionada.


``` json
{
 "name": "packages-install",
 "main": "index.js",
 "dependencies": {
    "express": "~4.8.6"
  }
}
```


Com isso, agora nós temos o Express configurado como um _package_ da nossa aplicação e duas partes do Full-Stack já encaixadas!

#### Versionamento de Pacotes npm

Você pode estar se perguntando o que esse til (~) está fazendo antes do número da versão do Express. O ```npm``` usa um padrão de [versionamento semântico](https://docs.npmjs.com/misc/semver) para declarar a versão dos _packages_. Isso significa que o til (~) vai pegar a versão mais próxima da que foi especificada. Nesse caso, apenas as versões do Express que forem maiores que 4.8.6 e menores que 4.9 serão instaladas.

Cada um desses três números tem um significado para a versão. Nesse exemplo, no Express 4.8.6 o 4 representa a versão maior, o 8 a versão menor e o 6 representa um _patch_. Normalmente uma correção de _bug_ é categorizada como um _patch_ e não deve quebrar nenhuma compatibilidade. A versão menor é atualizada quando são adicionadas novas features e também não devem quebrar a compatibilidade com a API anterior. A atualização da versão maior pode quebrar a compatibilidade com a API anterior.

Usar esse tipo de versionamento é uma boa prática porque garante que que somente a versão especificada será usada no seu projeto. E o projeto estará hápito a baixar correções aplicadas até a versão 4.9, mas não uma nova versão que possa quebrar a compatibilidade como a 5.0.

Assim, quando voltarmos a esta aplicação no futuro e usar o ```nmp install``` saberemos exatamente qual versão do Express estaremos usando e que não será baixada nenhuma versão mais recente que possa quebrar nossa aplicação.

### Método #2: Adicionanl Packages via Linha de Comando

A segunda maneira de adicionar packages a sua aplicação é usando o ```npm``` via linha de comando. Essa é a menra mais prática já que o ```npm``` pode salvar o package automaticamento no seu arquivo ```package.json```. E a parte mais legal é que **ele vai adicionar a versão correta do package!** Se você escrever direto no ```package.json``` você vai ter que buscar na internet o número correto da versão. Esse método vai tornar nossa vida muito mais fácil.


Esse é o comando para instalar o Express e salvar a modificação no ```package.json```:


```bash
npm install express --save
```


Você vai reparar que esse comando baixa o _package_ e instala ele em uma nova pasta chamada **node_modules**. É aqui que são instalados os _packages_ em projetos Node e esse comando instala apenas o _package_ que foi chamado especificamente (Express nesse caso).

## Instalando Todos Packages


O **Método #2** vai instalar os _packages_ para gente e o **#1** vai adicionar eles no ```package.json``` mas não vai instala-los ainda. Então para instalar todos os _packages_ definidos como dependências no arquivo ```package.json``` na pasta **node_modules**, é só digitar o comando a seguir.


```sh
npm install
```


Esse comando vai baixar todas as dependências para a pasta **node_modules** da sua aplicação.

## Instalando Multiplos Packages


O ```npm``` tem uma boa maneira para instalar multiplos _packages_. Basta informar todos os _packages_ em um comando ```npm install``` e eles serão instalados no projeto.


```sh
npm install express mongoose passport --save
```


Essa é uma maneira simples e fácil de instalar todos os _packages_ que precisamos.
