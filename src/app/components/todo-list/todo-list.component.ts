import { Component, OnInit } from '@angular/core';
import { TodoEntry } from '../../models/todo-entry';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoPersistanceService } from '../../services/todo-persistance.service';
import { TodoCategoriesService } from '../../services/todo-categories.service';
import { MessageBoxService } from '../../services/message-box.service';
import { MessageBoxType } from '../../models/message-box-type.enum';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  ordering = 'todoListOrdering';

  searchString = '';


  constructor(
    private todoPersistanceService: TodoPersistanceService) {
  }

  get todoList() {
    return this.todoPersistanceService.todoList;
  }

  ngOnInit() {
  }

  toggleStatus(todoEntry: TodoEntry) {
    this.todoPersistanceService.toggleStatus(todoEntry);
  }





}
