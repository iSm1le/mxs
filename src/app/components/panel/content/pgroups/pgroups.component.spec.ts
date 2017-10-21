import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgroupsComponent } from './pgroups.component';

describe('PgroupsComponent', () => {
  let component: PgroupsComponent;
  let fixture: ComponentFixture<PgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PgroupsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
