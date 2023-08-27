import { Injectable, signal, effect } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TabTitles } from '../interfaces/tab.interface';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
    const savedTodos = JSON.parse(String(localStorage.getItem('todos'))) ?? [];
    this._todos.set(savedTodos)

    effect(() => {
      const todos = this._todos()
      localStorage.setItem('todos', JSON.stringify(todos))
    });
  }

  private _todos = signal<Todo[]>([]);

  public currentTab = signal<TabTitles>(TabTitles.All);



  public get todos() {
    return this._todos
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

  deleteTodoById(id: Todo['id']) {
    this.todos.update(current => {
      const updatedTodos = current.filter(todo => todo.id !== id)
      return updatedTodos
    })
  }

  clearTodos() {
    this.todos.set([])
  }
}
