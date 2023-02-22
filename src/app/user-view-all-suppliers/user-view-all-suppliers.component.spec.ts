import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAllSuppliersComponent } from './user-view-all-suppliers.component';

describe('UserViewAllSuppliersComponent', () => {
  let component: UserViewAllSuppliersComponent;
  let fixture: ComponentFixture<UserViewAllSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAllSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAllSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
