import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNeweditComponent } from './book-newedit.component';

describe('BookNeweditComponent', () => {
  let component: BookNeweditComponent;
  let fixture: ComponentFixture<BookNeweditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNeweditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNeweditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
