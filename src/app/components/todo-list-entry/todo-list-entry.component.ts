import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TodoEntry} from '../../models/todo-entry';
import {SettingsService} from '../../services/settings.service';
import {MessageBoxType} from '../../models/message-box-type.enum';
import {TodoPersistanceService} from '../../services/todo-persistance.service';
import {MessageBoxService} from '../../services/message-box.service';

@Component({
  selector: '[app-todo-list-entry]',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListEntryComponent implements OnInit {

  @Input()
  item: TodoEntry;

  constructor(private SettingsService: SettingsService, private todoPersistanceService: TodoPersistanceService,
              private messageBoxService: MessageBoxService) { }
  get showDelete() {
    return this.SettingsService.showDelete;
  }
  ngOnInit() {
  }

  deleteTodo(id: number) {
    this.todoPersistanceService.deleteTodo(id);
    this.messageBoxService.display('Eintrag gelöscht', MessageBoxType.success);
  }




}
