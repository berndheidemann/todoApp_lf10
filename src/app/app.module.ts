import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoPersistanceService } from './services/todo-persistance.service';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoCategoriesService } from './services/todo-categories.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TodoSearchPipe } from './pipes/todo-search.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MessageBoxService } from './services/message-box.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListOrderingPipe } from './pipes/todo-list-ordering.pipe'
import { MyDatePickerModule } from 'mydatepicker';
import { TodoDueDateComponent } from './components/todo-due-date/todo-due-date.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoSearchPipe,
    NavbarComponent,
    MessageBoxComponent,
    TodoListOrderingPipe,
    TodoDueDateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyDatePickerModule
  ],
  providers: [TodoPersistanceService, TodoCategoriesService, MessageBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
