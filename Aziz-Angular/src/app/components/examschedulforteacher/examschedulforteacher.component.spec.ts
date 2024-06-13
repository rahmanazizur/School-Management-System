import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamschedulforteacherComponent } from './examschedulforteacher.component';

describe('ExamschedulforteacherComponent', () => {
  let component: ExamschedulforteacherComponent;
  let fixture: ComponentFixture<ExamschedulforteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamschedulforteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamschedulforteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
