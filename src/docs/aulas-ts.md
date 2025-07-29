# O que é TypeScript?

TypeScript é um superset (extensão da linguagem), que adiciona novos recursos e funcionalidades. Publicada em 2012 pela Microsoft. É usado para melhorar o desenvolvimento de aplicações em larga escala que usam JavaScript. Nessa linguagem, especificamos: os tipos dos dados que estamos trabalhando (definindo com clareza o que ela guarda); E a melhoria da capacidade de aplicar conceitos de POO.

## Como o TypeScript funciona?

O TypeScript é um "syntax sugar", que, após sua utilização, será necessário convertê-lo para JS puro. Ou seja, ocorre uma **transpilação de código**. Podemos usar esse site https://www.typescriptlang.org/play/ para ver como ficar o código TypeScript transpilado para JS.

## Por que usar o TypeScript (mesmo em projetos pequenos)?

Vantagens de usar TypeScript:

- Tipagem dinâmica (JS é fracamente tipada)
- Ajuda a descobrir falhas e bugs
- Comunicação entre equipes de desenvolvedores
- Não altera a perfomance do código e compatibilidade

## Variáveis e constantes

Armazenas valores na memória de forma otimizada. A tipagem da variável muda o gerenciamento de recursos. Antes de pensar qual o tipo primitivo da sua variável, você deve pensar se essa variável irá ser alterada em outras partes do código. Se sim, declare com **let**. Se não, declare com **const**.

> Valores de variáveis constantes não podem ser mudadas. A não ser que seja um objeto ou array. E caso você queira que o objeto não possa ser alterado, utilize `Object.freeze(objeto)`. Exemplo abaixo:

```js
const obj = {
  name: "Matheus",
  lastName: "Faustino",
};

Object.freeze(obj);

obj.name = "Marcos"; // [ERR]: Cannot assign to read only property 'name' of object '#<Object>'

console.log(obj.name + " " + obj.lastName);
```

## Estrutura de decisões (condicionais)

São utilizadas para tomar decisões dentro do fluxo do código. As três estruturas de condições são:

- If/Else
- Switch
- Operador Ternário

Elas deixam o programa mais inteligente. Vamos revê-los novamente:

### If/Else

Nos permite criar caminhos baseados em valores de verdadeiro ou falso. Para isso, faremos uma asserção (lógica que define se o valor é verdadeiro ou false) para decidir qual caminho que o código continuará o fluxo. Exemplo: um estabelecimento só aceita pagamento por maiores de idade com dinheiro. Mas, se tiver a permição dos pais e dinheiro, é possível pagar. Porém, se não for maior de idade e não tiver dinheiro, não será possível realizar a compra. Código:

```ts
let permicaoDosPais: boolean = false;
let idade: number = 18;
let dinheiro: boolean = true;

if (idade >= 18 && dinheiro) {
  console.log("Tudo certo para a compra!");
} else if (permicaoDosPais && dinheiro) {
  console.log("Tudo certo para a compra! (Os pais permitiram)");
} else {
  console.log(
    "Não será possível realizar a compra! (Ou os pais não permitiram ou está sem dinheiro)"
  );
}

// Como o a idade é igual a 18 e tem dinheiro, então está tudo certo para a compra.
```

### Switch

Usamos o Switch em momentos onde temos uma variável que pode guardar muitos diferentes valores. Um exemplo seria uma central de telemarketing, onde cada número do teclado numérico serve para uma ação específica.

```ts
let num: number;
num = 2;

switch (num) {
  case 1: // caso num for 1:
    console.log("Para fazer reclamação do plano");
    break;
  case 2: // caso num for 2:
    console.log("Para falar com o suporte");
    break;
  case 3: // caso num for 3:
    console.log("Para cancelar o plano");
    break;
  case 4: // caso num for 4:
    console.log("Para mudar informações de contato");
    break;
  default:
    console.log("Esse número não faz nada");
}
```

### Operador Ternário

É utilizado para tomar decisões extremamente simples, retornando valores diferentes dependendo da condicional. Como, por exemplo, validar se o usuário é do sexo feminino ou masculino. Código:

```js
const prefix = user.gender === "FEMALE" ? "Sra." : "Sr.";
```

## Estruturas de repetição

Executar repetidamente uma ação. Usando _For_ (`For in` e `foreach`) e _While_.

### For (For in e foreach)

Forma simples de fazer o código repetir uma ação. Ele pode ser usado de 3 formas dependendo das informações disponíveis para iniciá-los. Mas em todos os casos iremos trabalhar com o conceito de índice (posição que se encontra o fluxo/iteração). Exemplo, um código percorre uma lista com 10 usuários. Código:

```ts
type User = {
  id: number;
  name: string;
  contact: string;
};

const users: User[] = [
  { id: 0, name: "Maria Silva", contact: "maria.s@email.com" },
  { id: 1, name: "João Oliveira", contact: "joao.o@email.com" },
  { id: 2, name: "Ana Costa", contact: "ana.c@email.com" },
  { id: 3, name: "Pedro Souza", contact: "pedro.s@email.com" },
  { id: 4, name: "Mariana Santos", contact: "mariana.s@email.com" },
  { id: 5, name: "Lucas Pereira", contact: "lucas.p@email.com" },
  { id: 6, name: "Julia Lima", contact: "julia.l@email.com" },
  { id: 7, name: "Gabriel Fernandes", contact: "gabriel.f@email.com" },
  { id: 8, name: "Beatriz Rocha", contact: "beatriz.r@email.com" },
  { id: 9, name: "Rafael Alves", contact: "rafael.a@email.com" },
];

for (let index: number = 0; index <= users.length; index++) {
  console.log(users[index]);
}

// ou podemos fazer da seguinte forma:
for (const index in users) {
  console.log(users[index]);
}

// ou ainda mais simples:
users.forEach((user) => {
  console.log(user);
});
```

### While

Quando temos a necessidade de entrar em um loop com o valor indefinido, podemos recorrer ao while. Enquanto tal condicional for verdadeira, o loop continuará executando.

```ts
type UserStomach = {
  full: boolean;
  stomach: number;
  eat: (food: string) => void;
};

const user: UserStomach = {
  full: false,
  stomach: 0,
  eat: (food: string) =>
    user.stomach === 100
      ? (user.full = true)
      : food === "bread"
      ? user.stomach + 25
      : user.stomach,
};

while (!user.full) {
  user.eat("bread");
  // O usuário só vai parar de comer quando user.full for igual a true
}
```

## Funções

São blocos de código que executam em momentos especificos dentro do código.

## Tipagem de valores

Para definir o tipo de uma variável, adicionamos `const variable: type = value`. Existem duas formas de definir tipos de um valor, com os tipos básicos (oferecidos pelo TypeScript) ou criando tipos complexos.

### Tipos básicos

- String: Textos
- Number: Números
- Boolean: Decisão entre verdadeiro ou falso
- Object: Objetos
- Array: Lista. Contém uma sintaxe extra (chamada de _generics_), para definir quais os valores da lista
- Enum: Definição um conjunto de valores nomeados
- Tuple: Uma lista com quantidade e tipos fixos
- Unknown: Qualquer valor (obriga você a verificar o tipo antes de usa)
- Any: Qualquer valor (não recomendado)
- Void: Usado em funções que não retornam nada
- Null e/ou Undefined: Valores vazios
- Never: Para funções que nunca retornam

#### Enum

Significa "Enumerated/Enumerador", ela é usada quando há uma variável que possui uma quantidade finita de valores específicos. Ex:

```ts
enum FormaDePagamento {
  cartaoDeCredito = "card_c",
  cartaoDeDebito = "card_d",
  tranferenciaBancaria = "transfer",
  dinheiroEmEspecie = "fisicalMoney",
}

const FazerPagamento = FormaDePagamento.cartaoDeCredito;
```

> Dentro do enumerador FormaDePagamento apenas há 4 propriedades disponíveis. Se colocar alguma outra propriedade que não existe dentro do enumerador, não irá funcionar. Ex: `FormaDePagamento.pix`

Caso seja definido um enumerador com propriedades sem valores, ao usar essas propriedades, elas retornarão o índice que se encontram. Ex:

```ts
enum Pagante {
  nome, // 0
  data, // 1
  cpf, // 2
  local, // 3
}

console.log(Pagante.cpf); // 2
```

#### Tuple

Usando a tupla podemos definir o tipo dos valores dentro de um array. Ou seja, Tuple/Tupla é do tipo array que contém valores também tipados, e por conta disso, a quantidade desses valores são finitos.

```ts
const value: [string, number] = ["Matheus", 18];

const getNameAndAge = (user: object): [string, number] => {
  // Código para capiturar o nome e idade do objeto e retornar em forma de array
};
```

#### Unknown e any

Quando não sabemos o tipo especifico da variável ou aceitamos qualquer tipo, usamos o _unknown_. Também podemos fazer isso com o _any_, porém, o any remove o _type checking_, que garante que os valores sigam um tipo específico.

#### Void

Usado em funções que não retornam nada.

```ts
interface IUser {
  name: string;
  age: number;
  email: string;
  haveAJob: boolean;
}

const user: IUser = {
  name: "Matheus Faustino",
  age: 18,
  email: "matheus@mail.com",
  haveAJob: false,
};

const sayHelloToUser = (user: IUser): void => {
  console.log(`Hello ${user.name}`);
};

sayHelloToUser(user); // "Hello Matheus Faustino"
```

#### Como os tipos podem ser utilizados juntos a uma função?

- Uma função tem valores de entrada e saída, ambos podem de ser tipados;
- Fazer a tipagem do input/output de uma função, ajuda a entender para que ela serve;

```ts
function funcao(param1: type, param2: type): type {
  // Normal function typed...
}

const funcao = (param1: type, param2: type): type => {
  // Arrow function typed...
};
```

### Tipos complexos

Podemos criar tipos costumizados para especificar as estruturas dos nossos objetos. Como, por exemplo:

```ts
const getNameAndAge = (user: object): [string, number] => {
  return [user.name, user.age];
  // Property 'name' does not exist on type 'object'
};
```

A especificação de `user: object` não ajuda muito, pois não sabemos quais as propriedades que compõe o usuário. O tipo `object` se refere a qualquer valor não primitivo, mas não à um usuário em si. Sendo assim, quando tentamos acessar a propriedade `firstName` ou `age`, teremo um erro. Para resolver isso, criamos um tipo personalizado para o usuário, definindo quais propriedades ele possui.

#### Type

```ts
type UserT = {
  name: string;
  age: number;
  email: string;
};

const getNameAndAge = (user: UserT): [string, number] => {
  return [user.name, user.age];
};

const matheusFaustino: UserT = {
  name: "Matheus Faustino",
  age: 18,
  email: "matheusf@email.com",
};

console.log(getNameAndAge(matheusFaustino)); // ["Matheus Faustino", 18]
```

Agora, nosso parâmetro `user` é do tipo `UserType`, definindo o objeto com as propriedades necessárias para ser um usuário. Mas, podemos refinar ainda mais o `user`:

```ts
enum Gender {
  Male = "Masculino",
  Female = "Feminino",
}

enum Roles {
  Admin,
  NormalUser,
}

type UserType = {
  name: string;
  age: number;
  gender?: Gender; // Propriedade Opicional, ou seja, não é obrigatório
  email: string;
  password: string;
  roles: Array<Roles>;
};

const matheusFaustino: UserType = {
  name: "Matheus Faustino",
  age: 18,
  gender: Gender.Male,
  email: "matheusFaustino@email.com",
  password: "40028922_ligue_agora_ganhe_já...",
  roles: [Roles.NormalUser],
};

const getNameAndAge = (user: UserType): [string, number] => {
  return [user.name, user.age];
};

console.log(getNameAndAge(matheusFaustino)); // ["Matheus Faustino", 18]
```

> Ou seja, os tipos complexos é um conjunto de tipos básicos para definir o formato de uma estrutura de dados.

##### Inline definition

Ela define o tipo do objeto na mesma linha onde se encontra o parâmetro da função. Ou seja, não é necessário definir um tipo com o método `type`. É ruim para a legibilidade do código. Ex:

```ts
const matheusFaustino = {
  name: "Matheus Faustino",
  age: 18,
  email: "matheusFaustino@email.com",
  password: "40028922_ligue_agora_ganhe_já...",
};

const getNameAndAge = (user: {
  name: string;
  age: number;
  email: string;
  password: string;
}): [string, number] => {
  return [user.name, user.age];
};

console.log(getNameAndAge(matheusFaustino)); // ["Matheus Faustino", 18]
```

### Interface

Ele é, basicamente, a mesma coisa do `type`. Porém, ele usa uma funcionalidade de estender em classes.

## Como tipar elementos do DOM

Como conversar com o navegador com TypeScript? Quando trabalhamos com TypeScript com DOM, alguém já desenvolveu as tipagens para cada elemento DOM. Agora só é necessário aprender a usar.

```ts
const myElement: HTMLElement = document.querySelector(".title")
document.querySelector(elementSelector: string): HTMLElement
```

O `HTMLElement` representa qualquer elemento do HTML. Mas e se meu elemento for uma \<div\>? Então, usamos da seguinte forma:

```ts
const myDiv: HTMLDivElement = document.getElementById(
  "my-div"
) as HTMLDivElement;
```

Usamos o `HTMLDivElement` para tipar a variável para guardar somente elementos HTML de div. E, como não é um elemento qualquer, precisamos colocar no final da busca um `type assertion`, informando que deve retornar um elemento específico do HTML (no caso a `<div id="my-div"></div>`). Podemos achar tipos para cada elemento específico no HTML. Por exemplo: _HTMLLIElement_ para itens numa lista,    para parágrafos.

> Buscas utilizando o `querySelector` e criação de elementos com `createElement`, não precisam de _type assertion_.

```ts
const paragrafo: HTMLParagraphElement = document.createElement("p");
const elements: HTMLLIElement | null = document.querySelector("li");
```

> Podemos adicionar um valor default como null. Se o `const elements: HTMLLIElement | null = document.querySelector("li")` não conseguiu achar o elemento \<li\>, a variavel elements recebe o valor null.

## Tipos externos

Podemos usar libs para resolver problemas comuns, como gerenciamento de rotas, criação de componentes, e etc. As libs não precisam ser reescritas em TypeScript para serem compatíveis. Porém, cada biblioteca para JavaScript precisa vir com os tipos para TypeScript. Como o Fastify, sozinho não conseguimos fazer nada com TypeScript, mas com a instalação de seus tipos `@types/fastify`, abre portas para a utilização do Fastify com TypeScript. Exemplo:

Vamos instalar o React.js: `npm i react --save`. Porém, precisamos de seus tipos: `npm i @types/react --save-dev` salva na versão de desenvolvimento, pois ela não será usada na produção.

Nem todas as bibliotecas tem suporte para TypeScript. Se esse for o caso, há 2 opções:

- Não tipar os objetos dessa biblioteca (não recomendado);
- Criar os tipos necessários para que se possa trabalhar com ela.
  - Para criar esses tipos, precisamos utilizar a declaração de módulo `.d.ts`. Criando um arquivo para especificar os tipos necessários para a utilização de métodos e objetos.

Esses arquivos `custom.d.ts` devem ser incluídos na configuração do TypeScript, pelo arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    ...
  },
  "include": ["./custom.d.ts"], // Aqui estamos incluíndo os tipos
}
```

E dentro do arquivo `custom.d.ts` vamos criar a definição dos tipos que precisamos:

```ts
export declare enum Type {
  VALUE1,
  VALUE2,
}

export declare function myFunction(param: Array<string>): Type;
```

> Não é comum um programador precisar criar tipos para bibliotecas externas, mas isso pode acontecer.

## Classes

Classes representa um template para criar tipos específicos de objetos. Ou seja, define quais são as características de um determinado objeto. Exemplo, pense nas classes como uma fábrica de cookies, onde será produzido cookies com propriedades próprias, como: tipo de massa, tipo do chocolate, largura, comprimento (os cookies são os objetos).

Vamos criar um sistema de petshop para cadastrar apenas cachorros:

```ts
class Dog {
  name: string = "";
  weight: number = 0;
  color: string = "";
  breed: string = "";
  size: number = 0;
}

const newDog: Dog = new Dog();
// Quando definimos uma classe, ela já se encarrega de definir o tipo do objeto. Ou seja, a classe serve para fazer tipagem e definir templates também.
```

Porém, se dermos `console.log(newDog)`, os valores serão os mesmos da classe. Precisamos de uma forma de definir os valores das propriedades. Para isso, usamos o método `constructor/construtor`. Ele é chamado quando instanciamos um objeto através de uma classe usando operador `new`. Nele podemos especificar quais valores podem ser passados quando instanciamos um novo objeto. Veja:

```ts
class Dog {
  name: string = "";
  weight: number = 0;
  color: string = "";
  breed: string = "";
  size: number = 0;

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    this.size = size;
  }
}
```

`this` é uma referencia ao objeto que será criado. Com o constructor, permite que passemos as propriedades do novo cachorrinho atrável da instância.

```ts
let newDog: Dog;
newDog = new Dog("Pingo", 3.5, "black", "Pinscher miniature", 25);
newDog = new Dog("Lana", 25, "Light Gold", "Golden retriever", 51);
```

### Métodos de Classes

Propriedades são características do objeto, já os métodos são ações que esse objeto pode fazer. Como uma pessoa, ela tem suas propriedades, nome, altura, peso, cor da pele, entre outros. E tem seus "métodos", suas ações, como andar, deitar, comer, pegar algo, pular, falar e etc.

Vamos à nossa classe _Dog_. Nosso cachorro não precisa ter todos os métodos, apenas os necessários. Por que, aliás, um cachorro pode fazer muitas coisas. Mas, nesse caso, vamos fazer o cachorro latir:

```ts
class Dog {
  name: string = "";
  weight: number = 0;
  color: string = "";
  breed: string = "";
  size: number = 0;

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    this.size = size;
  }

  bark(): void {
    console.log("Au-Au");
  }
}
```

Agora podemos fazer o cachorro latir:

```ts
let pingo: Dog = new Dog("Pingo", 3.5, "black", "Pinscher miniature", 25);
pingo.bark(); // "Au-Au"
```

Mas isso é muito simples, vamos fazer uma forma do cachorro latir toda vez que ele escuta o nome dele:

```ts
class Dog {
  name: string = "";
  weight: number = 0;
  color: string = "";
  breed: string = "";
  size: number = 0;

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    this.size = size;
  }
  bark(): void {
    console.log("Au-Au");
  }

  hear(noise: string): void {
    if (noise.includes(this.name)) {
      this.bark();
    }
  }
}

let pingo: Dog = new Dog("Pingo", 3.5, "black", "Pinscher miniature", 25);
pingo.hear("Vem Pingo Vem"); // "Au-Au"
```

### Visibilidade

Ao definir uma classe com propriedades e métodos, não precisamos expor toda informação que ela guardar. Muitas vezes precisamos proteger determinadas propriedades, para que ela não possam ser alteradas. Precisamos encapsualar um valor. E que esse valor apenas possa ser alterado em determinadas circunstâncias.

```ts
class Dog {
  name: string = "";
  private energy: number = 100;

  constructor() {}

  bark(): void {}
  hear(noise: string): void {}
}
```

Com o uso da palavra `private` podemos privar a propriedade `energy`, impossibilitando a leitura e alterações. Quando criamos uma classe devemos pensar quais valores devem ser públicos ou privados. Esses valores privados são disponíveis para leitura e alteração dentro da classe. Vamos ao exemplo com o cachorro:

```ts
class Dog {
  name: string = "";
  private energy: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  bark(): void {
    if (this.energy >= 30) {
      console.log("Au-Au");
      this.energy -= 10;
    }
  }
}
```

Nesse exemplo, o cachorro tem 100 de energia, se a energia deve for maior ou igual a 30, ele pode latir e perde 10 de energia, se a enegia dele estiver abaixo de 30, ele não consegue latir.

```ts
const pingo = new Dog("Pingo");

pingo.bark(); // 100 -> 90
pingo.bark(); // 90 -> 80
pingo.bark(); // 80 -> 70
pingo.bark(); // 70 -> 60
pingo.bark(); // 60 -> 50
pingo.bark(); // 50 -> 40
pingo.bark(); // 40 -> 30
pingo.bark(); // 30 -> 20
pingo.bark(); // Não consegue latir
```

Porém, se ele perde energia, ele precisa recuperar. Vamos fazer uma forma dele recuperar a energia com um petisco. Vamos criar uma classe que fará comidas, que dará energia para o cachorro:

```ts
class Food {
  name: string = "";
  energy: number = 0;

  constructor(name: string, energy: number) {
    this.name = name;
    this.energy = energy;
  }
}

class Dog {
  name: string = "";
  private energy: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  bark(): void {
    if (this.energy >= 30) {
      console.log("Au-Au");
      this.energy -= 10;
      console.log("Energia em " + this.energy + "%");
    } else {
      console.log("Energia baixa, não dá para latir");
    }
  }

  eat(food: Food): void {
    if (this.energy > 100) {
      this.energy += food.energy;
      console.log("Energia em " + this.energy + "%");
    }
  }
}

const pingo = new Dog("Pingo");
const meat = new Food("Beef", 30);

pingo.bark(); // energy: 90
pingo.bark(); // energy: 80
pingo.bark(); // energy: 70

pingo.eat(meat); // energy: 70 + 30 = 100
```

Porém, o `private`não serve apenas para privar propriedades de uma classe, mas também, para privar métodos. É só colocar `private` no começo da função. Ex:

```ts
class Dog {
  name: string = "";
  private energy: number = 30;

  constructor(name: string) {
    this.name = name;
  }

  private whenLowerEnergy(): boolean {
    return this.energy <= 30;
  }

  private whenFullEnergy(): boolean {
    return this.energy >= 100;
  }

  bark(): void {
    if (this.whenLowerEnergy()) {
      console.log("Au-Au");
      this.energy -= 10;
      console.log("Energia em " + this.energy + "%");
    }
  }

  eat(food: Food): void {
    if (this.whenFullEnergy()) {
      this.energy += food.energy;
      console.log("Energia em " + this.energy + "%");
    }
  }
}
```

### Intefaces

Interfaces definem a estrutura de uma classe, mas não podemos criar instâncias. É um contrato a ser seguido. Usado para garantir que uma classe tenha um determinado funcionamento. Exemplo, uma fabrica de montagem de carros. Onde a fábrica recebe as peças e monta o carro:

```ts
interface Car {
  parts: Array<string>;
  assembly();
}
```

Isso é como se fosse o `type`, só que para classes. Agora vamos definir a classe que seguirá o modelo acima feito:

```ts
class CarModelA implements Car {
  parts: string[];

  constructor(parts: Array<string>) {
    this.parts = parts;
  }

  assembly() {
    const car = this.parts.join("-");
    return car;
  }
}
```

O `implements` é a maneira de definir a interface da classe. A partir disso, a classe deve seguir com a propriedade _parts_ e o método _assembly()_.

### Heranças

Classes podem herdar métodos e características de outras classes. Vamos ao exemplo dos carros, existem dois modelos de carros, um tem modo esporte (que aumenta a velocidade do carro) e ou outro não tem. Normalmente, sem heranças, teria que criar duas classes para os carros. No carro normal teria a velocidade total, velocidade atual, número de engrenagens e o método acelerar, que troca de marcha. E no carro esportivo, deve se ter as mesma caracteristicas e propriedades do carro normal, com adição da escolha entre esportivo e não esportivo, onde, sendo esportivo, irá aumentar a velocidade total:

```ts
class ModelA {
  totalSpeed: number = 150;
  speedy: number = 0;
  private gears: number = 5;

  constructor() {
    // ...
  }

  accelerate(): void {
    if (this.speedy >= this.totalSpeed) {
      // troca de marcha
      this.speedy = this.totalSpeed / this.gears;
    }
  }
}

class ModelB {
  totalSpeed: number = 150;
  speedy: number = 0;
  private gears: number = 5;
  private sportMode: boolean = false;

  constructor() {
    // ...
  }

  toggleMode(): void {
    this.sportMode = !this.sportMode;
    this.totalSpeed += this.sportMode ? 50 : -50;
  }

  accelerate(): void {
    if (this.speedy >= this.totalSpeed) {
      // troca de marcha
      this.speedy = this.totalSpeed / this.gears;
    }
  }
}
```

Ótimo, agora há dois modelos 90% identicos. Porém, com o uso de heranças, podemos diminuir esse código drasticamente. Usando apenas uma classes, digamos "classe das classes", ela serve de modelo para outras classes:

```ts
class CarModel {
  totalSpeed: number;
  speedy: number;
  private gears: number;

  constructor(/* ... */) {
    // ...
  }

  accelerate(): void {
    if (this.speedy >= this.totalSpeed) {
      // troca de marcha
      this.speedy = this.totalSpeed / this.gears;
    }
  }
}
```

Com a "classe das classes" criada, vamos passar essa base para as outras classes usando o `extends` e `super`.

```ts
class ModelA extends CarModel {
  constructor() {
    // no super, é possível passar os valores iniciais das propriedades (em ordem)
    super(150, 0, 5);
  }
}
```

Pronto, o `ModelA` tem todos os métodos e propriedades do `CarModel`. Porém, o `ModelB` tem algumas funcionalidade a mais que precisamos adicionar:

```ts
class CarB extends CarModel {
  // adiciona uma nova propriedade
  private sportMode: boolean = false;

  constructor() {
    super(150, 0, 6); // importa as propriedades e funcionalidades de CarModel
  }

  // adiciona um novo método
  toggleSportMode(): void {
    this.sportMode = !this.sportMode;
    this.totalSpeed += this.sportMode ? 50 : -50;
  }
}
```

## Generics

É uma melhoria na forma como definimos tipos. Um exemplo classico de _generics_ é quando definimos um array de um certo tipo: `const names: Array<string> = ["João", "Vitor"]`. Todos os elementos dessa lista devem ser do tipo string `Array<string>`. Mas, o generics não aceita somente tipos primários, ele pode aceitar também tipos costumizados, como uma lista de usuários:

```ts
type Users = {
  name: string;
  age: number;
};

const usersList: Array<Users> = [
  { name: "Matheus", age: 18 },
  { name: "Marcos", age: 21 },
];
```

Contudo, _generics_ também podem ser criadas. Isso ajuda a garantir que um tipo será composto por outro tipo durante sua definição. Como um objeto de paginação, que percorre uma lista de usuários ou funcionários:

```ts
type UserPage = {
  list: Array<User>; // Uma lista de usuários
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
};

type EmployeesPage = {
  list: Array<Employee>; // Uma lista de funcionários
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
};
```

Você percebe que, nos dois tipos, o que muda é o tipo dos elementos no Array? Então, é possível evitar a duplicatura de tipos, podemos usar o _generic_. Onde podemos deixar o tipo do Array para ser definido depois:

```ts
type Page<T> = {
  list: Array<T>; // O T de TYPE, será passado depois durante a definição
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
};

const users: Page<User> = getUsers({ page: 1 });
const users: Page<Employee> = getGetEmployees({ page: 2 });
```
