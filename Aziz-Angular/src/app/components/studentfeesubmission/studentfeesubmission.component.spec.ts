import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeesubmissionComponent } from './studentfeesubmission.component';

describe('StudentfeesubmissionComponent', () => {
  let component: StudentfeesubmissionComponent;
  let fixture: ComponentFixture<StudentfeesubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentfeesubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentfeesubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
