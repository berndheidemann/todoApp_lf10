import { Component, OnInit } from '@angular/core';
import { TodoEntry } from '../../models/todo-entry';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoPersistanceService } from '../../services/todo-persistance.service';
import { TodoCategoriesService } from '../../services/todo-categories.service';
import { MessageBoxService } from '../../services/message-box.service';
import { MessageBoxType } from '../../models/message-box-type.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  searchString = '';

  constructor(private todoPersistanceService: TodoPersistanceService, private messageBoxService: MessageBoxService) {
  }

  get todoList() {
    return this.todoPersistanceService.todoList;
  }

  ngOnInit() {
  }

  toggleStatus(todoEntry: TodoEntry) {
    this.todoPersistanceService.toggleStatus(todoEntry);
  }

  deleteTodo(id: number) {
    this.todoPersistanceService.deleteTodo(id);
    this.messageBoxService.display('Eintrag gelöscht', MessageBoxType.success);
  }

}
