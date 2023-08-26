import { Component, signal } from '@angular/core';
import Tab from 'src/app/interfaces/tab.interface';

@Component({
  selector: 'tab-wrapper',
  templateUrl: './tab-wrapper.component.html',
  styleUrls: ['./tab-wrapper.component.scss']
})
export class TabWrapperComponent {

  public tabs = signal<Tab[]>([
    { title: 'All', active: true },
    { title: 'Active', active: false },
    { title: 'Completed', active: false }
  ]);


  selectTab(selectedTab: Tab) {
    this.tabs.update(current => (
      current.map(tab => {
        return selectedTab.title === tab.title ? { ...tab, active: true } : { ...tab, active: false }
      })
    ))
  }
}
