import { Injectable } from '@angular/core';
import { TodoCategory } from '../models/todo-category';

@Injectable()
export class TodoCategoriesService {

  private _categories: TodoCategory[] = [];
  currentCategory: number;

  constructor() {
    this._categories.push(new TodoCategory(1, 'Hausarbeit'));
    this._categories.push(new TodoCategory(2, 'Finanzen'));
    this._categories.push(new TodoCategory(3, 'Schule'));
    this._categories.push(new TodoCategory(4, 'Verein'));

  }

  get categories(): TodoCategory[] {
    return this._categories;
  }

}
