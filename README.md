# Query string parameters => /book?nome="" => req.query

Método GET
Realizar alguma busca no servidor

# Path parameters => /book/:id => req.params

Métodos GET, PUT, DELETE

Realizar alguma operação (busca ou criação ou atualização ou deleção) em algum determinado recurso (identificado pelo id)

# Body => { } => req.body

Métodos POST e PUT

Realizar algum tipo de autenticação no sistema ou envio de dados
de um formulário para o servidor para a criação ou atualização de um recurso

# Exercícios

### 1. Criar controller userController com as seguintes operações:

getUsers => retornar todos os usuários
getUser => retornar um determinado usuário
createUser => cria um usuário
updateUser => atualiza um usuário
deleteUser => deleta um usuário 
