# TypeScript

- `npm init -y`: Inicia o projeto em Node.js
- `npm i -D typescript`: Instala o TypeScript
- `npm i express`: Instala o express. Porém, o express vem sem a tipagem para o TypeScript, então...
- `npm i --save-dev @types/express`: Instala as dependências de tipagem para o express
- `npx tsc --init`: Inicia o arquivo de configurações do TypeScript (como *esModuleInterop* para permitir importações e exportações)
- `npx tsc src/index.ts`: Transpila o código TypeScript para JavaScript
- `npx tsc`: Lê o arquivo de configurações do TypeScript e transpila o código

> No arquivo de configurações do TypeScript há muitas preferencias desativadas. Como: ` "outDir": "./",` refere ao local onde ficará o arquivo transpilado, normalmente colocamos dentro de uma pasta chamada "dist" ou "build".

Para usar o TypeScript ao vivo, usaremos o `ts-node-dev` (no JS temos o nodemon), podemos usar também o Babel, Sucrase ou TypeORM para BD. Com o ts-node-dev instalado, vamos configurar os scripts do package.json para rodar ao vivo.

```json
"scripts": {
  "dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts",
  // --transpileOnly não verifica se tem erros no código, apenas transpila mesmo com erros.
},
```
