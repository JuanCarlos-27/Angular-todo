import { Component, inject } from '@angular/core';
import { TabTitles } from 'src/app/interfaces/tab.interface';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent {

  private todoService = inject(TodoService);

  markTodoAsCompleted(todo: Todo): void {
    this.todoService.markTodoAsCompleted(todo);
  }

  get currentTab() {
    return this.todoService.currentTab();
  }

  getTodos() {
    const todos = this.todoService.todos();

    if (this.currentTab === TabTitles.Active) {
      return todos.filter(todo => !todo.completed)
    }
    if (this.currentTab === TabTitles.Completed) {
      return todos.filter(todo => todo.completed)
    }
    return todos
  }

  onDeleteTodoById(id: Todo['id']) {
    this.todoService.deleteTodoById(id)
  }

  onClearTodos() {
    this.todoService.clearTodos()
  }

}
