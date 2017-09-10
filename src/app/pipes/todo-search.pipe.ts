import { Pipe, PipeTransform } from '@angular/core';
import { TodoEntry } from '../models/todo-entry';

@Pipe({
  name: 'todoSearchFilter'
})
export class TodoSearchPipe implements PipeTransform {

  transform(items: TodoEntry[], value: string): TodoEntry[] {
    if (!items) {
      return [];
    }
    return items.filter(t =>
      String(t.id) === value
      || t.label.toLowerCase().indexOf(value.toLowerCase()) > -1
      || t.category.label.toLowerCase().indexOf(value.toLowerCase()) > -1

    );
  }

}


