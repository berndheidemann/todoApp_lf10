import { TestBed, inject } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { AppModule } from '../app.module';

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('should be created', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
