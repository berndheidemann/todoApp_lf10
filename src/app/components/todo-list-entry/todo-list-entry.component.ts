import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TodoEntry} from '../../models/todo-entry';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: '[app-todo-list-entry]',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListEntryComponent implements OnInit {

  @Input()
  item: TodoEntry;

  constructor(private SettingsService: SettingsService) { }
  get showDelete() {
    return this.SettingsService.showDelete;
  }
  ngOnInit() {
  }

}
