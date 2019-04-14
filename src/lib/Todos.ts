import {TodosClassInterface} from "./TodosClassInterface";
import {Todo} from "./TodoInterface";
import {Promise} from "es6-promise";

export class Todos implements TodosClassInterface {

    todos: Todo[];

    constructor() {
        this.todos = [
            {
                id: 1,
                text: 'My ToDo one'
            },
            {
                id: 2,
                text: 'My ToDo two'
            },
            {
                id: 3,
                text: 'My ToDo three'
            }

        ]
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

        return new Promise((resolve) => {
            resolve(this.todos)
        });
    }
}