import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent  {

  constructor(public router: Router) { }

login() {
  this.router.navigateByUrl('/login');
}

register() {
  this.router.navigateByUrl('/register');
}
}
