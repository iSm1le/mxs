import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PusersComponent } from './pusers.component';

describe('PusersComponent', () => {
  let component: PusersComponent;
  let fixture: ComponentFixture<PusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
