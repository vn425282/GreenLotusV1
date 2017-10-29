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
      latitude: 10.7717431,
      longitude: 106.7035884,
			markers: [
				{
					address: "Ho Chi Minh, Vietnam",
					html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Xin chào, chúng tôi là <span style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ GREEN LOTUS</span></h4><p class="nobottommargin">Địa chỉ <strong>LẦU 36, TÒA NHÀ BITEXCO , 2 HẢI TRIỀU , P.BẾN NGHÉ, QUẬN I, TP.HCM</strong></p></div>',
					icon: {
						image: "../../../assets/images/icons/map-icon-red.png",
						iconsize: [32, 39],
            iconanchor: [32,39],
					},
          latitude: 10.7717431,
          longitude: 106.7035884
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
