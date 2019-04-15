import $ = require("jquery");
import {Todos} from "./lib/Todos";
import {Todo} from "./lib/TodoInterface";

let todos = new Todos();

function loadTodos() {
    todos.getTodos().then((todos) => {
        for (let todo of todos) {
            $('#todos').append(`<div class="col-lg-9 col-md-9"><p>${todo.text}</p></div>
            <div class="col-lg-3 col-md-3">
            <button id="${todo.id}" class="deleteTodo btn btn-danger">Delete</button></div>`)
        }
    });
}

// add to do
let todoForm = document.getElementById('todoForm');

todoForm.onsubmit = ((e) => {
    e.preventDefault();
    let todoText: string;
    todoText = $('#todoText').val().toString();

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

// let deleteTodoCollection = document.getElementsByClassName('deleteTodo');
// console.log(deleteTodoCollection);
// console.log(deleteTodoCollection[0]);
// for (let i = 0; i < deleteTodoCollection.length; i++) {
//     console.log(deleteTodoCollection[i]);
//     deleteTodoCollection.item(i).addEventListener('click', (e) => {
//         let id = e.target.id;
//
//         todos.deleteTodo(id).then(() => {
//             $('#todos').html('');
//             loadTodos();
//         });
//     });
// }


//delete to do
$(document).on('click', '.deleteTodo', (e) => {
    let id = e.target.id;

    todos.deleteTodo(id).then(() => {
        $('#todos').html('');
        loadTodos();
    })
});