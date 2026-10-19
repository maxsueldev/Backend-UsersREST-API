# Backend-UsersREST-API

API REST desenvolvida como Back-End do projeto UsersREST-API. A aplicação fornece serviços para o gerenciamento de usuários e autenticação, integrando o processamento das requisições a um banco de dados MongoDB Atlas.

Este é um projeto pessoal de estudo, desenvolvido para praticar a criação de uma API e sua integração com uma aplicação Front-End independente.

## Repositórios relacionados

- **Front-End:** https://github.com/maxsueldev/UsersREST-API
- **Aplicação online:** https://users-rest-api.vercel.app/

## Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **Express** — estrutura para criação da API HTTP.
- **MongoDB Atlas** — banco de dados hospedado na nuvem.
- **Mongoose** — integração com o MongoDB.
- **JWT (jsonwebtoken)** — geração e verificação de tokens de autenticação.
- **bcrypt** — hash de senhas.
- **CORS** — configuração de acesso entre origens.
- **dotenv** — carregamento de variáveis de ambiente.
- **Nodemon** — reinicialização automática durante o desenvolvimento.

## Funcionalidades

- Cadastro de usuários.
- Autenticação por e-mail e senha.
- Geração de tokens JWT.
- Hash de senhas com bcrypt.
- Persistência de dados com MongoDB Atlas.
- Validação de dados recebidos nas operações de usuário.

## Executando localmente

### Pré-requisitos

- Node.js e npm instalados.
- Uma instância de MongoDB acessível, como um cluster no MongoDB Atlas.
- Variáveis de ambiente configuradas para a aplicação.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/maxsueldev/Backend-UsersREST-API.git
```

Entre na pasta:

```bash
cd Backend-UsersREST-API
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente necessárias para a conexão com o MongoDB e para a autenticação JWT, conforme os nomes esperados pelo código-fonte.

Inicie o servidor em modo de desenvolvimento:

```bash
npm run server
```

Esse comando executa o script `server` definido no `package.json`, que utiliza Nodemon para iniciar `src/server.js`.

## Configuração e segurança

As credenciais do MongoDB Atlas e o segredo utilizado para assinar tokens JWT devem ser mantidos em variáveis de ambiente e nunca publicados no repositório.

O acesso ao banco também depende das permissões e das regras de rede configuradas no MongoDB Atlas.

## Implantação

A API está hospedada no Render e utiliza o MongoDB Atlas para persistência de dados.

Para reproduzir a implantação em outro ambiente, configure as variáveis de ambiente exigidas pelo código e utilize o comando de inicialização apropriado para o ambiente de produção.

## Aprendizados

Este projeto permitiu praticar:

- Criação de uma API REST com Node.js e Express.
- Integração com MongoDB Atlas usando Mongoose.
- Autenticação com JWT.
- Hash de senhas com bcrypt.
- Configuração de variáveis de ambiente.
- Integração entre Back-End e Front-End.

---

Projeto pessoal desenvolvido para fins de estudo e aprimoramento técnico.
