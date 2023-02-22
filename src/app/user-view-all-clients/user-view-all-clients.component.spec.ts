import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAllClientsComponent } from './user-view-all-clients.component';

describe('UserViewAllClientsComponent', () => {
  let component: UserViewAllClientsComponent;
  let fixture: ComponentFixture<UserViewAllClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAllClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAllClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
