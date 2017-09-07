import { Component, OnInit } from '@angular/core';
import { TodoEntry } from '../../models/todo-entry';
import { TodoPersistanceService } from '../../services/todo-persistance.service';
import { TodoCategoriesService } from '../../services/todo-categories.service';
import { Router } from '@angular/router';
import { MessageBoxService } from '../../services/message-box.service';
import { MessageBoxType } from '../../models/message-box-type.enum';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTodo: TodoEntry = new TodoEntry();
  labelBlur = false;
  categoryBlur = false;

  constructor(
    private todoPersistanceService: TodoPersistanceService,
    private todoCategoriesService: TodoCategoriesService,
    private router: Router,
    private messageBoxService: MessageBoxService

  ) { }

  get categories() {
    return this.todoCategoriesService.categories;
  }

  ngOnInit() {
  }

  save(newTodo: TodoEntry) {
    if (newTodo.label && newTodo.category) {
      this.todoPersistanceService.saveTodo(newTodo);
      this.newTodo = new TodoEntry();
      this.router.navigateByUrl('/list');
      this.messageBoxService.display(newTodo.label + ' erfolgreich abgespeichert', MessageBoxType.success);
    } else {
      this.categoryBlur = true;
      this.labelBlur = true;
      this.messageBoxService.display('Alle Felder müssen gefüllt werden!', MessageBoxType.danger);

    }
  }

}