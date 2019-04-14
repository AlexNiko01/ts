import $ = require("jquery");
import {Todos} from "./lib/Todos";
import {Todo} from "./lib/TodoInterface";

let todos = new Todos();

function loadTodos() {
    todos.getTodos().then((todos) => {
        console.log(todos);
        for (let todo of todos) {
            $('#todos').append(`<div class="col-lg-9 col-md-9"><p>${todo.text}</p></div><div class="col-lg-3 col-md-3"><button class="btn btn-danger">Delete</button></div>`)
        }
    })

}

let todoForm = document.getElementById('todoForm');

todoForm.onsubmit = ((e) => {
    e.preventDefault();
    let todoText: string;
    todoText = $('#todoText').val().toString();
    console.log(todoText);
    let newTodo: Todo = {
        id: todos.generateId(),
        text: todoText
    };

    todos.addTodo(newTodo).then((todo) => {
        $('#todos').html('');
        loadTodos();
    });
});
loadTodos();