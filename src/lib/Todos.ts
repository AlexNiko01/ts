import {TodosClassInterface} from "./TodosClassInterface";
import {Todo} from "./TodoInterface";
import {Promise} from "es6-promise";

export class Todos implements TodosClassInterface {

    todos: Todo[];

    constructor() {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([
                {
                    id: 1,
                    text: 'My ToDo one'
                }
            ]))
        }
        this.todos = JSON.parse(localStorage.getItem('todos'));
    }


    getTodos(): Promise<Todo[]> {
        return new Promise((resolve) => {
            resolve(this.todos)
        });
    }

    generateId(): number {
        return Math.floor(Math.random() * 1000000000)
    }

    addTodo(newTodo: Todo): Promise<Todo[]> {
        this.todos.push(newTodo);

        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));

        return new Promise((resolve) => {
            resolve(this.todos)
        });
    }

    deleteTodo(id: number): Promise<Todo[]> {
        let todosLS = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < todosLS.length; i++) {
            if (todosLS[i].id == id) {
                this.todos.splice(i, 1);
                todosLS.splice(i, 1);

                localStorage.setItem('todos', JSON.stringify(todosLS))
            }
        }



        return new Promise((resolve) => {
            resolve(this.todos)
        });
    }

}