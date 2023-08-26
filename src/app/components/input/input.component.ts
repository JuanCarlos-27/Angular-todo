import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  private todoService = inject(TodoService);

  public todoInput = new FormControl('', [Validators.required]);

  addNewTodo(event: Event) {
    event.preventDefault();
    if (this.todoInput.invalid || this.todoInput.value == null) return;

    const value = this.todoInput.value as string;
    
    this.todoService.addNewTodo(value)

    this.todoInput.reset();
  }
}
