import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroutineComponent } from './classroutine.component';

describe('ClassroutineComponent', () => {
  let component: ClassroutineComponent;
  let fixture: ComponentFixture<ClassroutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroutineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
