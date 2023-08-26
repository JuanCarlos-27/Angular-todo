import { Component, inject } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent {

  private todoService = inject(TodoService);
  public todos = this.todoService.todos;


  markTodoAsCompleted(todo: Todo): void {
    this.todoService.markTodoAsCompleted(todo);
  }


}
