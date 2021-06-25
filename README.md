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

## 1. Criar controller userController com as seguintes operações:

##getUsers => retornar todos os usuários
##getUser => retornar um determinado usuário
##createUser => cria um usuário
1. Criar função createUser no userController 
2. Criar router que vincula o path à função createUser
3. Passar o router no app.use()
4. Verificar se o path do formulário está correto
5. Implementar função createUser para inserir um novo usuário em um array de usuários

##updateUser => atualiza um usuário
##deleteUser => deleta um usuário 
