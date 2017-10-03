import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';

declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  color = '#00f';
  constructor(public router: Router) {
    // if(!localStorage.getItem('login')){
    //   this.router.navigate(['/login']);
    // }
  }
}
