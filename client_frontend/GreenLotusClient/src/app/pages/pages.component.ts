import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';
import { DOCUMENT } from '@angular/common';

declare var $: any;

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent {
  @ViewChild('myScript') myScript: ElementRef;
  color = '#00f';
  constructor(@Inject(DOCUMENT) public document, public router: Router) {
    
  }

  ngAfterViewInit() {
    var s = this.document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../assets/js/plugins.js";
    this.myScript.nativeElement.appendChild(s);

    var a = this.document.createElement("script");
    a.type = "text/javascript";
    a.src = "../../assets/js/functions.js";
    this.myScript.nativeElement.appendChild(a);

    var c = this.document.createElement("script");
    c.type = "text/javascript";
    c.src = "http://idangero.us/swiper/dist/js/swiper.min.js";
    this.myScript.nativeElement.appendChild(c);

    var e = this.document.createElement("script");
    e.type = "text/javascript";
    e.src = "https://unpkg.com/infinite-scroll@3/dist/infinite-scroll.pkgd.min.js";
    this.myScript.nativeElement.appendChild(e);

    

  }
}
