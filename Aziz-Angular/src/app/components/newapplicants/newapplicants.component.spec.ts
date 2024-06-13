import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapplicantsComponent } from './newapplicants.component';

describe('NewapplicantsComponent', () => {
  let component: NewapplicantsComponent;
  let fixture: ComponentFixture<NewapplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewapplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
