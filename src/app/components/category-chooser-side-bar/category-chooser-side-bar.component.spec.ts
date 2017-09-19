import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChooserSideBarComponent } from './category-chooser-side-bar.component';

describe('CategoryChooserSideBarComponent', () => {
  let component: CategoryChooserSideBarComponent;
  let fixture: ComponentFixture<CategoryChooserSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryChooserSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChooserSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
