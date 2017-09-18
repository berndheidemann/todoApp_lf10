import { TestBed, inject } from '@angular/core/testing';

import { TodoCategoriesService } from './todo-categories.service';
import { AppModule } from '../app.module';

describe('TodoCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('should be created', inject([TodoCategoriesService], (service: TodoCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
