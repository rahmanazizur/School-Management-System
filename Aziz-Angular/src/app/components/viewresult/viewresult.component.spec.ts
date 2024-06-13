import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewresultComponent } from './viewresult.component';

describe('ViewresultComponent', () => {
  let component: ViewresultComponent;
  let fixture: ComponentFixture<ViewresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
