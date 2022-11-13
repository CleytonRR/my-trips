# My Trips :airplane:

Projeto feito utilizando NextJs, Typescript, Graphql, Leaflet, React-Leaflet e GraphCMS, tem como objetivo listar em um mapa
locais, mostrando foto e vídeos sobre o mesmo. Com ele consegui praticar bastante sobre Graphql, as principais Features do NextJs,
Deploy na Vercel, testes. Vale a pena conferir.

![My Trips](https://raw.githubusercontent.com/CleytonRR/my-trips/main/demo/demo.png)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`GRAPHQL_HOST`

`GRAPHQL_TOKEN`

você também precisará criar uma conta no GraphQL CMS para configurar o Schema.

você precisará criar dois models com as seguintes configurações:

### Place

name: Single Line text - unique

slug: #slug - unique - required

description: Rich Text

Location: Location - unique

gallery: Gallery


### Page

heading - Single Line Text, Required

slug - #slug - unique - required

body - Rich Text - Required
## Rodando localmente :fire: 

Clone o projeto

```bash
  git clone git@github.com:CleytonRR/my-trips.git
```

Entre no diretório do projeto

```bash
  cd my-tips
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev
```

## Screenshots

![My Trips](https://raw.githubusercontent.com/CleytonRR/my-trips/main/demo/demo.png)


## Stack utilizada

**Front-end:** ReactJS, NextJS, Style-Components, Nextjs-progressbar 

**Back-end:** Graphql, GraphCMS



