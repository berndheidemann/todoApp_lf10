import { TodoListOrderingPipe } from './todo-list-ordering.pipe';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { SettingsService } from '../services/settings.service';

describe('TodoListOrderingPipe', () => {





  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule]
    })
      .compileComponents();
  }));


  it('create an instance', inject([SettingsService], (settingsService) => {
    const pipe = new TodoListOrderingPipe(settingsService);
    expect(pipe).toBeTruthy();
  }));
});
