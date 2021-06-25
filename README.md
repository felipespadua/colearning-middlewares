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

## 1. Criar rotas de Consulta, Criação, Edição e Deleção de usuário

Estruruta de user:
{
    name: "Felipe",
    idade: 26,
    genero: "Masculino",
    pathImage: "public/wrgretwrer2242fsdfg3422"
}

### Rota Consulta de um usuário
1. método GET
2. userController.getUser 
3. retorna um determinado usuário identificado pelo id

### Rota Consulta de todos usuários
1. método GET
2. userController.getUsers
3. retorna todos os usuários

### Rota Criação
1. userController.createUser
2. método POST 
3. middleware multer
4. cria um usuário e insere no array de usuários

### Rota Edição
1. userController.updateUser
2. método PUT 
3. edita um usuário identificado pelo id

### Rota Deleção
1. userController.deleteUser
2. método DELETE 
3. exclui um usuário identificado pelo id


## 2. Usar a rota de consulta de todos os usuário para preencher a tabela dinamicamente

## 3. Usar a rota de consulta de um determinado usuário para retornar o usuário ao clicar no botão "Exibir" e renderizar-lo na tela.

## 4. Ao clicar no botão "Editar", um novo formulario deverá ser carregado com os dados preenchidos com um botão "Confirmar". Ao clicar o botão "Confirmar", os dados do usuário deverão ser atualizados pela rota de edição.

