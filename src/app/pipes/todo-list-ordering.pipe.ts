import { Pipe, PipeTransform } from '@angular/core';
import { TodoEntry } from '../models/todo-entry';
import { SettingsService } from '../services/settings.service';

@Pipe({
  name: 'todoListOrdering'
})
export class TodoListOrderingPipe implements PipeTransform {

  constructor(private SettingsService: SettingsService) {

  }

  transform(items: TodoEntry[], value: string): TodoEntry[] {
    if (!items) {
      return [];
    }
    if (!this.SettingsService.listSort) {
      return items;
    }
    return items.sort((t1, t2) => this.orderByIdAndStatus(t1, t2));
  }


  private orderByIdAndStatus(t1: TodoEntry, t2: TodoEntry): number {
    if (t1.done && !t2.done) {
      return 1;
    }
    if (t2.done && !t1.done) {
      return -1;
    }
    if ((t1.done && t2.done || !t1.done && !t2.done) && t1.label.toLowerCase() > t2.label.toLowerCase()) {
      return 1;
    }
    if ((t1.done && t2.done || !t1.done && !t2.done) && t1.label.toLowerCase() < t2.label.toLowerCase()) {
      return -1;
    }
  }

}
