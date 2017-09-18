import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { TodoPersistanceService } from '../../services/todo-persistance.service';
import { AppModule } from '../../app.module';
import { RouterModule } from '@angular/router';
import { TodoCategory } from '../../models/todo-category';
import { TodoDueDateComponent } from '../todo-due-date/todo-due-date.component';
import { TodoEntry } from '../../models/todo-entry';


class TodoDataServiceMock {

  todoList: TodoEntry[] = [];

  saveTodo(todo: TodoEntry) {
    this.todoList.push(todo);
  }

}

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: TodoPersistanceService, useClass: TodoDataServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should save a new Todo', inject([TodoPersistanceService], (service: TodoPersistanceService) => {
    component.newTodo.label = 'werde gut';
    component.newTodo.category = new TodoCategory(122, 'foo');
    component.save(component.newTodo);
    expect(service.todoList.filter(t => t.label === 'werde gut').length).toBe(1);
  }));
});
