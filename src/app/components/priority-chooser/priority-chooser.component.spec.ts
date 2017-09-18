import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityChooserComponent } from './priority-chooser.component';

describe('PriorityChooserComponent', () => {
  let component: PriorityChooserComponent;
  let fixture: ComponentFixture<PriorityChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
