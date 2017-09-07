import { TestBed, inject } from '@angular/core/testing';

import { TodoPersistanceService } from './todo-persistance.service';
import { TodoEntry } from '../models/todo-entry';

describe('TodoPersistanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoPersistanceService]
    });
  });

  it('should be created', inject([TodoPersistanceService], (service: TodoPersistanceService) => {
    expect(service).toBeTruthy();
  }));

  it('should toggle the Todo Status', inject([TodoPersistanceService], (service: TodoPersistanceService) => {
    service.toggleStatus(new TodoEntry(2, 'Spülmaschine ausräumen'));
    expect(service.todoList.find(i => i.id === 2).done).toBeTruthy();

  }));

  it('should delete a Todo', inject([TodoPersistanceService], (service: TodoPersistanceService) => {
    service.deleteTodo(2);
    expect(service.todoList.find(i => i.id === 2)).toBeUndefined();

  }));

  it('should save a Todo', inject([TodoPersistanceService], (service: TodoPersistanceService) => {
    service.saveTodo(new TodoEntry(12, 'Schinken kaufen'));
    expect(service.todoList.find(i => i.id === 12).label).toBe('Schinken kaufen');

  }));


});
