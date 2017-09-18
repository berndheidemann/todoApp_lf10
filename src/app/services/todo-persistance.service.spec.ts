import { TestBed, inject } from '@angular/core/testing';

import { TodoPersistanceService } from './todo-persistance.service';
import { TodoEntry } from '../models/todo-entry';
import { AppModule } from '../app.module';

describe('TodoPersistanceService', () => {
  let pservice: TodoPersistanceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  beforeEach(inject([TodoPersistanceService], (service: TodoPersistanceService) => {
    pservice = service;

  }));

  it('should be created', inject([TodoPersistanceService], (service: TodoPersistanceService) => {
    expect(service).toBeTruthy();
  }));

  it('should toggle the Todo Status', () => {
    const todo = pservice.todoList.find(t => t.done === false);
    pservice.toggleStatus(todo);
    expect(pservice.todoList.find(i => i.id === todo.id).done).toBeTruthy();

  });

  it('should delete a Todo', () => {
    pservice.deleteTodo(2);
    expect(pservice.todoList.find(i => i.id === 2)).toBeUndefined();

  });

  it('should save a Todo', () => {
    pservice.saveTodo(new TodoEntry('Schinken kaufenn'));
    expect(pservice.todoList.find(i => i.label === 'Schinken kaufenn')).toBeTruthy();

  });


});
