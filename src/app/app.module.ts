import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { InputComponent } from './components/input/input.component';
import { TabWrapperComponent } from './components/tab-wrapper/tab-wrapper.component';
import { IcDeleteComponent } from './components/ic-delete/ic-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTodosComponent,
    InputComponent,
    TabWrapperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IcDeleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
