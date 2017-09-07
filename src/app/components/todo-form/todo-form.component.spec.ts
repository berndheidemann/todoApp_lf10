import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { TodoPersistanceService } from '../../services/todo-persistance.service';
import { AppModule } from '../../app.module';


class TodoServiceMock {

}

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
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
    component.newTodo.id = 1337777;
    component.newTodo.label = 'werde gut';
    component.save(component.newTodo);
    expect(service.todoList.find(i => i.id === 1337777).label).toBe('werde gut');
  }));
});
