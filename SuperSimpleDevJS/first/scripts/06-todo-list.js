let todoList = [{
  name: 'arroz',
  dueDate: '2023-09-05'
 }, {
  name: 'feijão',
  dueDate: '2023-09-05'
 }]
renderTodoList()
function renderTodoList() {
  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i]
    let {name, dueDate} = todoObject /* Isso é um atalho chamado 'desestruturação', que se baseia em retirar a propriedade de um objeto e a coloca em uma variável com mesmo nome, por exemplo: 
    "let name = todoObject.name", e 
    "let dueDate = todoObject.dueDate" - é a mesma coisa só q economizando uma linha
    */
    let html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1)
      renderTodoList()
    " class="delete-todo-button">Delete</button>` // 'splice' é o método de remover um valor de um array. O ',1' é caracteristico ao quantos numeros de valores eu quero remover, neste caso, apenas um valor deste index (${i}). E como atualizamos a lista de tarefas (todo), precisamos exibir ela novamente usando o 'renderTodoList()'
    todoListHTML += html
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}


function addTodo() {
  let inputElement = document.querySelector('.js-name-input')
  let name = inputElement.value

  let dateInputElement = document.querySelector('.js-due-date-input')
  let dueDate = dateInputElement.value // isso irá pegar a datá que selecionamos e salvá-la nesta variável.

  todoList.push({
    name,
    dueDate
  }) /* Adicionando ao Array. Como a propriedade e o nome da variável são iguais, não precisamos usar: 
  name: 'name',
  dueDate: 'dueDate' - Isso é um atalho chamado de 'shorthand property'
  */

  // Resetar toda vez ao pertar o botão
  inputElement.value = ''

  // Toda vez que adicionarmos uma tarefa (todo) à lista, também exibiremos a lista novamente
  renderTodoList()
}