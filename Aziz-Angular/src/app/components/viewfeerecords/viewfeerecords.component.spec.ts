import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfeerecordsComponent } from './viewfeerecords.component';

describe('ViewfeerecordsComponent', () => {
  let component: ViewfeerecordsComponent;
  let fixture: ComponentFixture<ViewfeerecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfeerecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfeerecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
