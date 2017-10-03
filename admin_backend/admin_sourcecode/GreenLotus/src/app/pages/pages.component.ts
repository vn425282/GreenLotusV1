import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';

declare var $: any;

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent {
  color = '#00f';
  constructor(public router: Router) {
    // if(!localStorage.getItem('login')){
    //   this.router.navigate(['/login']);
    // }
  }
}
