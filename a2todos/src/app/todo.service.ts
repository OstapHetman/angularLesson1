import { Init } from './init-todos';
import { Injectable } from '@angular/core';


@Injectable()
export class TodoService extends Init {

  constructor() { 
    super();
    console.log('TodoService Initialized');
    this.load();
  }

  getTodos () {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  addTodo(newTodo) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    // Add new Todo
    todos.push(newTodo);
    // Set New Todos 
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
