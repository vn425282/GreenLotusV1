import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  color = '#00f';
  constructor(public router: Router)
  {
    if(!localStorage.getItem('login')){
      this.router.navigate(['/login']);
    }
  }
}
