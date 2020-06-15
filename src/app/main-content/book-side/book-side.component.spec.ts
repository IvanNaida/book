import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSideComponent } from './book-side.component';

describe('BookSideComponent', () => {
  let component: BookSideComponent;
  let fixture: ComponentFixture<BookSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
