API Connect
Objetivo da API
API RESTful desenvolvida como Produto Mínimo Viável (MVP) para o gerenciamento de usuários, aplicando os princípios de arquitetura modular, semântica rigorosa do protocolo HTTP, validação precoce de dados e respostas padronizadas em formato JSON. O sistema emprega persistência em memória RAM para assegurar agilidade no ciclo de prototipagem.

Tecnologias Utilizadas
Node.js - Ambiente de execução JavaScript voltado para o back-end.

Express - Framework web rápido e minimalista para roteamento e gerenciamento de middlewares.

UUID - Biblioteca para geração de identificadores únicos universais para os registros.

Thunder Client - Extensão de ambiente de desenvolvimento integrada ao VS Code para validação e testes de requisições HTTP.

Passo a Passo para Execução Local
Clone o repositório em sua máquina:

Bash
git clone https://github.com/CodeZeroo01/api-connect-guilherme-cardoso.git
cd api-connect-guilherme-cardoso
Instale as dependências locais do projeto:

Bash
npm install
Inicie o servidor local:

Bash
node server.js
O servidor será inicializado e escutará as requisições na porta 3000.

Referência de Endpoints
1. Listar Usuários
Método: GET

Rota: /api/users

Descrição: Retorna a coleção completa de usuários cadastrados na memória.

Respostas:

200 OK: Retorna um array contendo os registros.

2. Cadastrar Usuário
Método: POST

Rota: /api/users

Descrição: Cria um novo registro de usuário a partir do payload fornecido.

Corpo da Requisição (JSON):

JSON
{
  "name": "Nome Completo",
  "email": "email@exemplo.com"
}
Respostas:

201 Created: Usuário criado com sucesso, retornando o objeto persistido com seu respectivo UUID.

400 Bad Request: Retornado caso os campos obrigatórios (name ou email) estejam ausentes.

3. Buscar Usuário por ID
Método: GET

Rota: /api/users/:id

Descrição: Localiza e retorna os detalhes de um usuário específico com base no identificador único passado na URL.

Respostas:

200 OK: Retorna os dados do usuário encontrado.

404 Not Found: Retornado caso o ID informado não exista na base em memória.

4. Atualizar Usuário
Método: PUT

Rota: /api/users/:id

Descrição: Atualiza as informações de um usuário existente referenciado pelo ID.

Corpo da Requisição (JSON):

JSON
{
  "name": "Novo Nome",
  "email": "novoemail@exemplo.com"
}
Respostas:

200 OK: Registro atualizado com sucesso.

400 Bad Request: Dados obrigatórios faltando.

404 Not Found: ID não localizado.

5. Remover Usuário
Método: DELETE

Rota: /api/users/:id

Descrição: Remove o registro correspondente ao ID informado da estrutura de dados.

Respostas:

200 OK: Usuário removido com sucesso.

404 Not Found: ID não localizado na persistência.
