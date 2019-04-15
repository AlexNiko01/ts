import {Todo} from "./TodoInterface";

export interface TodosClassInterface {
    todos: Todo[];

    getTodos();
    addTodo(newTodo: Todo);
    generateId();
    deleteTodo(id: number);
}