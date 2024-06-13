import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineadmissionComponent } from './onlineadmission.component';

describe('OnlineadmissionComponent', () => {
  let component: OnlineadmissionComponent;
  let fixture: ComponentFixture<OnlineadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineadmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
