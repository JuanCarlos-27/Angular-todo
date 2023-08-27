import { Component, signal, inject } from '@angular/core';
import Tab, { TabTitles } from 'src/app/interfaces/tab.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'tab-wrapper',
  templateUrl: './tab-wrapper.component.html',
  styleUrls: ['./tab-wrapper.component.scss']
})
export class TabWrapperComponent {

  public tabs = signal<Tab[]>([
    { title: TabTitles.All, active: true },
    { title: TabTitles.Active, active: false },
    { title: TabTitles.Completed, active: false }
  ]);

  private todoService = inject(TodoService)


  selectTab(selectedTab: TabTitles) {
    this.tabs.update(current => (
      current.map(tab => {
        return selectedTab === tab.title ? { ...tab, active: true } : { ...tab, active: false }
      })
    ))

    this.todoService.currentTab.set(selectedTab)
  }


}
