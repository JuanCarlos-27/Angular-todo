import { Injectable, signal } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private _todos = signal<Todo[]>([
    { id: '1', description: 'Buy Milk', completed: true },
    { id: '2', description: 'Buy Bread', completed: false },
    { id: '3', description: 'Buy Eggs', completed: false },
    { id: '4', description: 'Do coding challenges', completed: false },
  ]);

  public get todos() {
    return this._todos;
  }

  addNewTodo(content: string) {
    const todoId = crypto.randomUUID();
    this.todos.update(current => {
      return [
        ...current,
        { id: todoId, completed: false, description: content }
      ]
    })
  }
  
  markTodoAsCompleted(todo: Todo) {
    this.todos.update(current => {
      const updatedTodos = current.map(currentTodo => {
        return currentTodo.id === todo.id
          ? { ...currentTodo, completed: !currentTodo.completed }
          : currentTodo
      })

      return updatedTodos
    })
  }
}
