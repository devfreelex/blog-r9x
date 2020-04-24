### Documentação

Essa documentação contém a descrição completa a cerca do funcionamento de tudo que foi utilizado para construir a aplicação.

1 - Dependências

> Babel - Utilizado para tratar questões relativas a transpilação e compatibilidade entre navegadores.  https://babeljs.io/

> Parcel - O Parcel é um module bundler zero config excelente para desenvolver aplicações rapidamente. https://parceljs.org/

O trecho abaixo pertence ao arquivo package.json e através dele é possível identificar as demais dependências:
```json
    "devDependencies": {
        "@babel/core": "^7.9.0",
        "@babel/preset-env": "^7.9.5",
        "@babel/runtime-corejs3": "^7.9.2",
        "autoprefixer": "^9.7.6",
        "babel-cli": "^6.26.0",
        "babel-preset-es2015-ie": "^6.7.0",
        "core-js": "^3.6.4",
        "cross-env": "^7.0.2",
        "less": "^3.11.1",
        "parcel-bundler": "^1.12.4",
        "shx": "^0.3.2"
    },
    "dependencies": {
        "@babel/cli": "^7.8.4",
        "mdn-polyfills": "^5.20.0",
        "moment": "^2.24.0",
        "r9x_js": "^1.0.7",
        "whatwg-fetch": "^3.0.0"
    }
```

Outro ponto muito importante a ser observado é a utilização da biblioteca reativa r9x_js de minha autoria:

```json
"r9x_js": "^1.0.7"
```
> Foi com ela (R9x) que construí toda a aplicação... "Tudo reativo!!!" vale salientar.

### Estrutura do projeto

A estrutura de diretórios da aplicação segue a seguinte arquitetura:

![Alt text](src/assets/img/img-readme.jpg?raw=true "Title")


### Entendendo a estrutura reativa

* Component

```js

import { setScope, createComponent, getState, watch, mapActions } from 'r9x_js'

import HTML from './appHelloWorld.template'
import CSS from './appHelloWorld.styles'

export default () => {

    watch([], () => [])

    setScope(() => [
        name,
        template,
        children,
        hooks,
        listeners,
        methods
    ])


    const name = () => 'app-hello-world'

    const template = () => {
        return { HTML, CSS }
    }

    const children = () => []

    const hooks = () => [
        beforeOnRender,
        afterOnRender
    ]

    const listeners = () => []

    const methods = () => [
        ...mapActions(),
    ]

    const beforeOnRender = () => []
    const afterOnRender = () => []

    const rerender = () => {
        render('app-hello-world', getState())
    }

    return createComponent()
}

```

* template

```js

import { html } from 'r9x_js'

export default (state, props) => {
    return () => html `
        <h1 class="title">${state.title}</h1>
    `
}

```


* Styles

```js

import { css } from 'r9x_js'

export default (ctx) => {
    return css `
    .title { 
        display:block;
        float:left;
        width:100%;
        padding:15px;
        margin:15px;
        border:1px #ebebeb solid;
        text-align:center;
    }
    `
}

```

Os componentes são compostos por 3 partes que são *Factory Function*, *HTML Literal Template* e *CSS Literal Template*. Para entender melhor, o componente em si é apenas uma função que faz uso das funções epeciais abaixo:

* watch - responsável por observar mudanças em propriedades de dados.
* setScope - responsável por definir que recursos estarão disponível no escopo do componente
* mapActions - responsável por garantir acesso aos actions da store para eventuais atualizações dos dados da aplicação.
* render - responsável pela renderização do componente.
* getState - responsável por obter os dados do state 100% atualizados.
* createComponent - responsável por gerar o objeto do componente dentro da factory function.

> É através de *setScope*, que são definidos entre outros os *hooks* *beforeOnRender* e *afterOnRender* disparados respectivamente no momento adequado dentro do ciclo de vida de cada componente.


```js

   import { setScope } from 'r9x_js'

    setScope(() => [
        name,
        template,
        children,
        hooks,
        listeners,
        methods
    ])
    
    const hooks = () => [
        beforeOnRender,
        afterOnRender
    ]

    const beforeOnRender = () => []
    const afterOnRender = () => []

```

Já os listeners de cada componente se parecem com isso:

```js

    setScope(() => [
        listeners,
    ])

    const listeners = () => [onClickMenuItem]

    const onClickMenuItem = ({ elm, on, query }, { toggleMenu }) => {
        const menuItem = query('.menu-item', elm)
        on('click', menuItem, (e) => toggleMenu({ status: false }))
    }

```

* elm - Fornece acesso aos elementos DOM do componente.
* on - Deve ser utiliza para adicionar eventos, para tal, o primeiro parametro é o nome do evento, o segundo o elemento e o terceiro um callback.
* query - Deve ser utilizado para pesquisar elementos no domínio do componente.

Observe o trecho:

```js

 const onClickMenuItem = ({ elm, on, query }, { toggleMenu }) => {}

```

As actions podem ser acessadas de dentro do componente através dos listeners, em seu segundo parâmentro, é por isso que `toggleMenu` está presente entre chaves. 

>Observe a *action* `toggleMenu` sendo acessada e depois disparada pelo listener, no treixo abaixo:


```js

  on('click', menuItem, (e) => toggleMenu({ status: false }))

```

Da mesma forma como no caso dos listeners e hooks, as demais propriedades do componente podem ser decoradas seguindo a mesma sintaxe. Dessa maneira, para decorar o componente com metodos, a sintaxe é:


```js

   import { setScope } from 'r9x_js'

    setScope(() => [
        methods
    ])
    
    const methods = () => [
        anyMethod
    ]

    const anyMethod = () => { //excution }

```

E para definir componentes filhos:

```js

   import { setScope } from 'r9x_js'

   import anyComponent from 'any/directory'

    setScope(() => [
        children
    ])
    
    const children = () => [
        anyComponent
    ]


```

Como pode ver, tudo é muito simples.

Por fim, temo a definição do seletor do componente através da propriedade *name*.

```js

    setScope(() => [
        name,
    ])


    const name = () => 'app-hello-world'

```

### Router 

Tendo coberto por completo a sintaxe do componente na seção anterior, me sinto a vontade para abordar o roteador da aplicação. Veja abaixo como o mesmo se parece:

routes.module.js

```js

import appNotFound from '../components/appNotFound/appNotFound.component'
import appPosts from '../components/appPosts/appPosts.component'
import appPostDetail from '../components/appPost/appPostDetail.component'
import appMostRead from '../components/appMostRead/appMostRead.component'
import appHistory from '../components/appHistory/appHistory.component'

export default [
    { title: 'Home', hashExp: /(#\/home)$/, component: appPosts },
    { title: 'Post', hashExp: /(#\/post\/\w+)$/, component: appPostDetail },
    { title: 'Category', hashExp: /(#\/categories\/\w+)$/, component: appPosts },
    { title: 'Cart', hashExp: /(#\/most-read)$/, component: appMostRead },
    { title: 'Cart', hashExp: /(#\/history)$/, component: appHistory },
    { title: 'Not Found', hashExp: /^[#\/404]$/, component: appNotFound }
]

```

> O roteador é apenas um array de componentes e cada chave desse array é composto por um objeto.

#### Propriedades de rota

- title - título da página roteada
- hashExp - expressão para validação das rotas
- component - container do componente no roteador

> Atualmente a versão semântica do roteador está sendo desenvolvida e não funciona com SSR ainda. Mas, num futuro próximo o suporte será extendido para SSR.


### Juntando tudo

main.js

```js

import { appFactory } from 'r9x_js'

import appMain from './components/appMain/appMain.component'
import routesModule from './routes/routes.module'
import storeModule from './store/store.module'

const App = appFactory()

App
    .use('components', { appMain })
    .use('routes', routesModule)
    .use('store', storeModule)
    .init()

```

No código acima temos a importação dos módulos:

* appMain - componente principal
* routesModule - módulo de rotas
* storeModule - o gerenciador de estado da aplicação

> O *storeModule* é um gerenciador de estado inspirado no padrão *flux*, orientado a eventos.

# A aplicação

A aplicação se propõem a exibir posts, contabilizar exibições e exibir um histórico de leitura e você pode acessá-la aqui: ---------LINKPARAACESSARAAPLICAÇÃO----------

![Alt text](src/assets/img/screenshot-app.png?raw=true "Title")

Para rodar o projeto localmente siga os passos abaixo: 

1 - Baixe o zip ou clone o repositório ---> https://github.com/devfreelex/blog-r9x

2 - Na raiz do projeto execute o comendo no terminal:

``` npm install ```

3 - Na raiz do projeto executo o comando:

``` npm run dev ```
