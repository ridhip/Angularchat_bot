import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent   {
  email = 'konnect@workrig.com' ;

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }
 getstarted() {
  // this.api.page(
    // this.email
    this.router.navigateByUrl('/page');
 }

register() {
  this.router.navigateByUrl('/register');
}


   // )
/*
   .subscribe(
     r => {
       if (r.token) {
         this.customer.setToken(r.token);
         this.router.navigateByUrl('/page');
       }
     },

     r => {
       alert(r.error.error);
     }
   );
 }
*/
}
