import { Component, OnInit, HostBinding } from '@angular/core';
import { TodoEntry } from '../../models/todo-entry';
import { TodoPersistanceService } from '../../services/todo-persistance.service';
import { TodoCategoriesService } from '../../services/todo-categories.service';
import { Router } from '@angular/router';
import { MessageBoxService } from '../../services/message-box.service';
import { MessageBoxType } from '../../models/message-box-type.enum';
import { IMyDpOptions } from 'mydatepicker';

// Datepicker: https://github.com/kekeh/mydatepicker


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  dateStr: Object;

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
      if (this.dateStr) {
        newTodo.dueDate = new Date(`${this.dateStr['date']['year']}/${this.dateStr['date']['month']}/${this.dateStr['date']['day']}`);
      }
      this.todoPersistanceService.saveTodo(newTodo);
      this.newTodo = new TodoEntry();
      this.router.navigateByUrl('/list');
      this.messageBoxService.display(newTodo.label + ' erfolgreich abgespeichert', MessageBoxType.success);
      this.dateStr = {};
    } else {
      this.categoryBlur = true;
      this.labelBlur = true;
      this.messageBoxService.display('rot umrahmte Felder müssen gefüllt werden!', MessageBoxType.danger);

    }
  }

  setPriority(prio: number) {
    this.newTodo.priority = prio;
  }

}
