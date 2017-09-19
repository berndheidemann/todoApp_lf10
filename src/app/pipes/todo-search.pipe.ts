import { Pipe, PipeTransform } from '@angular/core';
import { TodoEntry } from '../models/todo-entry';
import { TodoCategoriesService } from '../services/todo-categories.service';

@Pipe({
  name: 'todoSearchFilter'
})
export class TodoSearchPipe implements PipeTransform {

  constructor(private TodoCategoriesService: TodoCategoriesService) {

  }

  transform(items: TodoEntry[], value: string): TodoEntry[] {
    if (!items) {
      return [];
    }
    if (this.TodoCategoriesService.currentCategory > 0) {
      items = items.filter(i => i.category.id === this.TodoCategoriesService.currentCategory);
    }
    return items.filter(t =>
      String(t.id) === value
      || t.label.toLowerCase().indexOf(value.toLowerCase()) > -1
      || t.category.label.toLowerCase().indexOf(value.toLowerCase()) > -1

    );
  }

}


