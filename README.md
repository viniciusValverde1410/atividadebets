 # - Sistema de Cadastro de Suspeitos Envolvidos em Lavagem de Dinheiro no Jogo de Apostas
  ## Contexto
Este projeto foi desenvolvido para atender a uma solicitação da Polícia Federal, com o objetivo de criar um sistema para o cadastro de suspeitos famosos envolvidos em esquemas de lavagem de dinheiro através de apostas. O sistema permite que os agentes da polícia realizem operações de cadastro, atualização, listagem e exclusão de suspeitos, além de verificar seu nível de envolvimento em atividades ilícitas.

### O sistema atende aos seguintes requisitos:

#### Cadastrar Suspeitos:
##### Informações obrigatórias: nome, profissão, envolvimento em apostas (sim/não) e nível de suspeita (baixo, médio, alto).
##### Validação: Nome e profissão são obrigatórios. O nível de suspeita deve ser classificado como "baixo", "médio" ou "alto".

#### Listar Suspeitos:
##### Listar todos os suspeitos cadastrados, com seus respectivos níveis de suspeita.

#### Buscar Suspeito Específico:
##### Buscar um suspeito específico pelo seu ID.

#### Atualizar Suspeito:
##### Atualizar as informações de um suspeito específico, exceto o ID.
##### Validação: As mesmas regras de cadastro devem ser aplicadas.

#### Excluir Suspeito:
##### Excluir um suspeito específico do sistema, buscando-o pelo ID.

### Instruções
#### Para utilizado no Postman se atente as Rotas:

##### Rotas específicas para cada funcionalidade:

POST /suspeitos - Cadastrar um novo suspeito.
GET /suspeitos - Listar todos os suspeitos.
GET /suspeitos/:id - Buscar um suspeito específico pelo ID.
PUT /suspeitos/:id - Atualizar informações de um suspeito.
DELETE /suspeitos/:id - Remover um suspeito do sistema.
Escolha os Métodos de Requisição:

POST: Para cadastrar um novo suspeito.
GET: Para listar e buscar suspeitos.
PUT: Para atualizar informações de um suspeito.
DELETE: Para remover um suspeito.
Validação:

Verifique se todos os campos obrigatórios (nome, profissão e nível de suspeita) estão preenchidos.
O envolvimento em apostas deve ser "sim" ou "não", e o nível de suspeita deve ser "baixo", "médio" ou "alto".
Códigos de Status HTTP:

200 OK: Operações de listagem, busca, atualização e exclusão bem-sucedidas.
201 Created: Suspeito cadastrado com sucesso.
400 Bad Request: Erro de validação (ex: campos obrigatórios não preenchidos).
404 Not Found: Suspeito não encontrado.
500 Internal Server Error: Erros inesperados no servidor.

### Como Executar o Projeto

##### Clone o repositório:

git clone <url-do-repositorio>

##### Navegue até o diretório do projeto:

cd <nome-do-diretorio>

###### Instale as dependências:

npm install

###### Inicie o servidor:

npm run dev

###### E crie o arquivo dotenv com a porta 4000

.env 
PORT=4000

### Agora está pronto para a utilização!
#### Lembre-se de sempre se atentar ao endereço e as rotas.
