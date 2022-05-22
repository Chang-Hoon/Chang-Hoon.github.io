const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    /* Elemtn.remove() */
    li.remove();
    console.log(li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(toDos);
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text + "  ";
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = { text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function handleParsedToDos(todo) {
    paintToDo(todo);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    /* Option 1 */
    // for (let i = 0; i < parsedToDos.length; i++) {
    //     paintToDo(parsedToDos[i]);
    // }

    /* Option 2 */
    // parsedToDos.forEach(handleParsedToDos);

    /* Option 3 */
    parsedToDos.forEach((item) => paintToDo(item));
    toDos = parsedToDos;
}