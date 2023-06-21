# Boas-vindas ao repositório do projeto Store Manager

<summary>🧑‍💻 O que foi desenvolvido</summary>

- Neste projeto você foi realizada a criação de uma API RESTful utilizando a arquitetura em camadas.

- A API em questão é um sistema de gerenciamento de vendas onde é possível criar, visualizar, deletar e atualizar produtos e vendas. O banco de dados MySQL foi utilizado para a gestão de dados.

- Desenvolvido testes para garantir as funcionalidade das implementações.

</br>
  
  <summary>📝 Habilidades a serem trabalhadas </summary>

- Interação com um banco de dados relacional MySQL;
- Implementação de uma API utilizando arquitetura em camadas;
- Criação de validações para os dados recebidos pela API;
- Elaboração de testes para APIs, garantindo assim a implementação dos endpoints;

</br>

## Orientações

<details>
<summary>🐳 Iniciando a aplicação no Docker Compose</summary>

```bash
# Instale as dependências
npm install

# Inicie os containers do compose `backend` e `db`
# A aplicação estará disponível em `http://localhost:3001` em modo de desenvolvimento
docker-compose up -d

# É possível ver os logs da aplicação com `docker logs -n 20 -f <nome-do-container>`
docker logs -n 20 -f store_manager
```

</details>

<details>
<summary>🖥️ Iniciando a aplicação localmente</summary>

> ⚠️ Atenção: Ao rodar localmente, a aplicação deverá receber variáveis de ambiente como exemplificado em [`env.example`](./env.example) para poder se comunicar com o serviço de banco de dados.

```bash
# Instale as dependências
npm install

# Inicie apenas o serviço `db` no compose
docker-compose up -d db

# Inicie a aplicação em modo de desenvolvimento
npm run dev:local
```

</details>
