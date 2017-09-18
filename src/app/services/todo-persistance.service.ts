import { Injectable } from '@angular/core';
import { TodoEntry } from '../models/todo-entry';
import { TodoCategory } from '../models/todo-category';
import { TodoCategoriesService } from './todo-categories.service';

@Injectable()
export class TodoPersistanceService {
  private localStorage = window.localStorage;


  // todoList: TodoEntry[] = [];

  constructor(private todoCategoriesService: TodoCategoriesService) {
    // this.todoList.push(new TodoEntry(1, 'Rasen mähen', this.todoCategoriesService.categories[0]));
    // this.todoList.push(new TodoEntry(2, 'Spülmaschine ausräumen', this.todoCategoriesService.categories[0]));
    // this.todoList.push(new TodoEntry(3, 'Fußballtraining absagen', this.todoCategoriesService.categories[3]));
    // this.todoList.push(new TodoEntry(4, 'externe Festplatte für Angular besorgen', this.todoCategoriesService.categories[2]));
    // this.todoList.push(new TodoEntry(5, 'Rechnungen überweisen', this.todoCategoriesService.categories[1]));
    // this.todoList.push(new TodoEntry(6, 'Kontoauszüge holen', this.todoCategoriesService.categories[1]));
  }

  get nextId(): number {
    if (this.localStorage.getItem('nextId') === null) {
      this.localStorage.setItem('nextId', '1');
    }
    let next = Number(this.localStorage.getItem('nextId'));
    next++;
    this.localStorage.setItem('nextId', String(next));
    return next - 1;


  }

  get todoList(): TodoEntry[] {
    if (this.localStorage.getItem('todos') === null) {
      this.localStorage.setItem('todos', JSON.stringify([]));
    }
    return JSON.parse(this.localStorage.getItem('todos'));
  }

  toggleStatus(todoEntry: TodoEntry) {
    const todList: TodoEntry[] = this.todoList;
    const index = todList.findIndex(i => i.id === todoEntry.id);
    todList[index].done = !this.todoList[index].done;
    this.localStorage.setItem('todos', JSON.stringify(todList));
  }

  deleteTodo(id: number) {
    this.localStorage.setItem('todos', JSON.stringify(this.todoList.filter(i => i.id !== id)));
  }

  saveTodo(newTodo: TodoEntry) {
    const todList: TodoEntry[] = this.todoList;
    newTodo.id = this.nextId;
    todList.push(newTodo);
    this.localStorage.setItem('todos', JSON.stringify(todList));
  }

  deleteAll() {
    this.localStorage.setItem('todos', JSON.stringify([]));
  }

  generateTestData() {
    const todoList: TodoEntry[] = [];
    todoList.push(new TodoEntry('Rasen mähen', this.todoCategoriesService.categories[0], new Date('2017/11/12')));
    todoList.push(new TodoEntry('Spülmaschine ausräumen', this.todoCategoriesService.categories[0], new Date('2017/09/29')));
    todoList.push(new TodoEntry('Fußballtraining absagen', this.todoCategoriesService.categories[3], new Date('2018/01/01')));
    todoList.push(new TodoEntry('externe Festplatte für Angular besorgen', this.todoCategoriesService.categories[2]));
    todoList.push(new TodoEntry('Rechnungen überweisen', this.todoCategoriesService.categories[1]));
    todoList.push(new TodoEntry('Kontoauszüge holen', this.todoCategoriesService.categories[1]));
    todoList.forEach(t => this.saveTodo(t));
  }

}
