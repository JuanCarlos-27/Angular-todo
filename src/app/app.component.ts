import { Component, inject } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private todoService = inject(TodoService);

  get currentTab() {
    const tab = this.todoService.currentTab()
    return tab;
  }

}
