let todoList = ['arroz', 'feijão']
renderTodoList()
function renderTodoList() {
  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i]
    let html = `<p>${todo}</p>`
    todoListHTML += html
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}


function addTodo() {
  let inputElement = document.querySelector('.js-name-input')
  let name = inputElement.value
  todoList.push(name) // Adicionar ao Array
  alert(todoList)

  // Resetar toda vez ao pertar o botão
  inputElement.value = ''

  // Toda vez aue adicionarmos uma tarefa (todo) à lista, também exibiremos a lista novamente
  renderTodoList()
}