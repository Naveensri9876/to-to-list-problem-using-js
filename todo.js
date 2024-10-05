const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function addTask(){
    const li = document.createElement('li');
        li.innerHTML =`${todoInput.value} <button style="margin-left:10px;">Remove</button>`;
        li.querySelector('button').onclick = () => todoList.removeChild(li);
        todoList.appendChild(li);
        todoInput.value = '';
}