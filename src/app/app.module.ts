import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserViewAllClientsComponent } from './user-view-all-clients/user-view-all-clients.component';
import { UserViewAllSuppliersComponent } from './user-view-all-suppliers/user-view-all-suppliers.component';
import { UserUploadInvoiceComponent } from './user-upload-invoice/user-upload-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserHomepageComponent,
    UserViewAllClientsComponent,
    UserViewAllSuppliersComponent,
    UserUploadInvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'user-registration', component: UserRegistrationComponent },
      { path: 'user-login', component: UserLoginComponent },
      { path: 'user-homepage', component: UserHomepageComponent },
      { path: 'user-view-all-clients', component: UserViewAllClientsComponent },
      { path: 'user-view-all-suppliers', component: UserViewAllSuppliersComponent },
      { path: 'user-upload-invoice', component: UserUploadInvoiceComponent }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
