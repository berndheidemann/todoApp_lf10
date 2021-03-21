import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

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
import { TodoListOrderingPipe } from './pipes/todo-list-ordering.pipe';
import { MyDatePickerModule } from 'mydatepicker';
import { TodoDueDateComponent } from './components/todo-due-date/todo-due-date.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsService } from './services/settings.service';
import { PriorityChooserComponent } from './components/priority-chooser/priority-chooser.component';
import { PriorityComponent } from './components/priority/priority.component';
import { CategoryChooserSideBarComponent } from './components/category-chooser-side-bar/category-chooser-side-bar.component';
import {TodoListEntryComponent} from './components/todo-list-entry/todo-list-entry.component';

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
    SettingsComponent,
    PriorityChooserComponent,
    PriorityComponent,
    CategoryChooserSideBarComponent,
    TodoListEntryComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyDatePickerModule
  ],
  providers: [
    TodoPersistanceService,
    TodoCategoriesService,
    MessageBoxService,
    SettingsService,
    {
      provide: APP_BASE_HREF, useValue: ''
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
