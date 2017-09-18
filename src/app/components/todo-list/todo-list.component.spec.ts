import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoEntry } from '../../models/todo-entry';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { AppComponent } from '../../app.component';
import { AppModule } from '../../app.module';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    // component.todoList.push(new TodoEntry(1, 'Rasen mähen'));
    // component.todoList.push(new TodoEntry(2, 'Spülmaschine ausräumen'));
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should change status after toggleDone', () => {
  //   component.toggleStatus(new TodoEntry('Spülmaschine ausräumen'));
  //   expect(component.todoList.find(i => i.id === 2).done).toBeTruthy();
  // });

  // it('should delete a Todo', () => {
  //   component.deleteTodo(2);
  //   expect(component.todoList.find(i => i.id === 2)).toBeUndefined();
  // });
});

