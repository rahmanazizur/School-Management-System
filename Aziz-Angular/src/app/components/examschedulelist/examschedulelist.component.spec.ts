import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamschedulelistComponent } from './examschedulelist.component';

describe('ExamschedulelistComponent', () => {
  let component: ExamschedulelistComponent;
  let fixture: ComponentFixture<ExamschedulelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamschedulelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamschedulelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
