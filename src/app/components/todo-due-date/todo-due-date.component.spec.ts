import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDueDateComponent } from './todo-due-date.component';

describe('TodoDueDateComponent', () => {
  let component: TodoDueDateComponent;
  let fixture: ComponentFixture<TodoDueDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDueDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
