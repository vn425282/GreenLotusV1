import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  color = '#00f';
  constructor(public router: Router) {
    // if(!localStorage.getItem('login')){
    //   this.router.navigate(['/login']);
    // }
  }
}
