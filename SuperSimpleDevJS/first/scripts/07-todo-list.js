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

//-------------------forEach-------------
// Um tipo mais prático de loop de um Array (ps: não contém break e o "continue" é trocado pelo "return")

  todoList.forEach((todoObject, index) => { // O primeiro parametro contará cada valor da matriz, o segundo contará o índice da matriz
    let {name, dueDate} = todoObject 
    let html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index}, 1)
      renderTodoList()
    " class="delete-todo-button">Delete</button>` 
    todoListHTML += html
  })

//------------------------------------------

  for (let i = 0; i < todoList.length; i++) {
    
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