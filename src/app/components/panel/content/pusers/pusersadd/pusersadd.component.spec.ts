import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PusersaddComponent } from './pusersadd.component';

describe('PusersaddComponent', () => {
  let component: PusersaddComponent;
  let fixture: ComponentFixture<PusersaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PusersaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PusersaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
