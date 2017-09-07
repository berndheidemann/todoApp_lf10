import { TestBed, inject } from '@angular/core/testing';

import { TodoCategoriesService } from './todo-categories.service';

describe('TodoCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoCategoriesService]
    });
  });

  it('should be created', inject([TodoCategoriesService], (service: TodoCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
