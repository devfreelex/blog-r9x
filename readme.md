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