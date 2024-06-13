import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalstudentComponent } from './approvalstudent.component';

describe('ApprovalstudentComponent', () => {
  let component: ApprovalstudentComponent;
  let fixture: ComponentFixture<ApprovalstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
