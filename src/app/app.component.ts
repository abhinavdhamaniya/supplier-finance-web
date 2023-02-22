import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pageTitle = 'Supplier Finance';
  loggedInUser: string = localStorage.getItem('LOGGED_IN_USER_ID')!;
  loggedInUserType: string = localStorage.getItem('LOGGED_IN_USER_TYPE')!;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.loggedInUser = localStorage.getItem('LOGGED_IN_USER_ID')!;
      this.loggedInUserType = localStorage.getItem('LOGGED_IN_USER_TYPE')!;
    }, 1);
  }

  logout(){
    localStorage.removeItem('LOGGED_IN_USER_ID');
    localStorage.removeItem('LOGGED_IN_USER_TYPE');
    this.router.navigate(['welcome'])
  }
}
