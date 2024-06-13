import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasstimetableforstudentComponent } from './classtimetableforstudent.component';

describe('ClasstimetableforstudentComponent', () => {
  let component: ClasstimetableforstudentComponent;
  let fixture: ComponentFixture<ClasstimetableforstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasstimetableforstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasstimetableforstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
