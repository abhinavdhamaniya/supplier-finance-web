import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadInvoiceComponent } from './user-upload-invoice.component';

describe('UserUploadInvoiceComponent', () => {
  let component: UserUploadInvoiceComponent;
  let fixture: ComponentFixture<UserUploadInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUploadInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
