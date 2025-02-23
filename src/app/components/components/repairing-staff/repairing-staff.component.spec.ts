import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairingStaffComponent } from './repairing-staff.component';

describe('RepairingStaffComponent', () => {
  let component: RepairingStaffComponent;
  let fixture: ComponentFixture<RepairingStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairingStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairingStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
