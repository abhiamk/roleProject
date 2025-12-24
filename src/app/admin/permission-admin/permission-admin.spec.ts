import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionAdmin } from './permission-admin';

describe('PermissionAdmin', () => {
  let component: PermissionAdmin;
  let fixture: ComponentFixture<PermissionAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
