import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';
import { DOCUMENT } from '@angular/common';

declare var $: any;
declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  color = '#00f';
  @ViewChild('myScript') myScript: ElementRef;
  constructor( @Inject(DOCUMENT) public document, public router: Router) {
    // if(!localStorage.getItem('login')){
    //   this.router.navigate(['/login']);
    // }
  }

  ngOnInit() {
    let s = this.document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../assets/js/plugins.js";
    this.myScript.nativeElement.appendChild(s);

    let a = this.document.createElement("script");
    a.type = "text/javascript";
    a.src = "../../assets/js/functions.js";
    this.myScript.nativeElement.appendChild(a);

    let g = this.document.createElement("script");
    g.type = "text/javascript";
    g.src = "../../assets/js/jquery.gmap.js";
    this.myScript.nativeElement.appendChild(g);

    $('#google-map').gMap({
			address: 'Ho Chi Minh, Vietnam',
			maptype: 'TERRAIN',
      zoom: 16,
      latitude: 10.456051,
      longitude: 105.638455,
			markers: [
				{
					address: "Ho Chi Minh, Vietnam",
					html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Hi, we\'re <span>Green Lotus</span></h4><p class="nobottommargin">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day, and a network of educational blogs where millions learn <strong>creative skills</strong>.</p></div>',
					icon: {
						image: "../../../assets/images/icons/map-icon-red.png",
						iconsize: [32, 39],
            iconanchor: [32,39],
					},
          latitude: 10.456051,
          longitude: 105.638455
				}
			],
			doubleclickzoom: false,
			controls: {
				panControl: true,
				zoomControl: true,
				mapTypeControl: true,
				scaleControl: false,
				streetViewControl: false,
				overviewMapControl: false
			}
		});
  }
}
