import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStaffComponent } from './add-new-staff.component';

describe('AddNewStaffComponent', () => {
  let component: AddNewStaffComponent;
  let fixture: ComponentFixture<AddNewStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
