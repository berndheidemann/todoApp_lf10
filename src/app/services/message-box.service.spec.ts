import { TestBed, inject } from '@angular/core/testing';

import { MessageBoxService } from './message-box.service';
import { AppModule } from '../app.module';

describe('MessageBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('should be created', inject([MessageBoxService], (service: MessageBoxService) => {
    expect(service).toBeTruthy();
  }));
});
