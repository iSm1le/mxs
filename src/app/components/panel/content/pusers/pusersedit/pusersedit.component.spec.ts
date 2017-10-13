import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuserseditComponent } from './pusersedit.component';

describe('PuserseditComponent', () => {
  let component: PuserseditComponent;
  let fixture: ComponentFixture<PuserseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuserseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuserseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
