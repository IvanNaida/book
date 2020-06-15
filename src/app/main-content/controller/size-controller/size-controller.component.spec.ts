import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeControllerComponent } from './size-controller.component';

describe('SizeControllerComponent', () => {
  let component: SizeControllerComponent;
  let fixture: ComponentFixture<SizeControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
