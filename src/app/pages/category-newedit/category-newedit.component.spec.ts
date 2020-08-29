import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNeweditComponent } from './category-newedit.component';

describe('CategoryNeweditComponent', () => {
  let component: CategoryNeweditComponent;
  let fixture: ComponentFixture<CategoryNeweditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryNeweditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNeweditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
