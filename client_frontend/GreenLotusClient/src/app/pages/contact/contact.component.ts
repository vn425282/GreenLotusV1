import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';
import { DOCUMENT } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  color = '#00f';
  @ViewChild('myScript') myScript: ElementRef;
  constructor(@Inject(DOCUMENT) public document, public router: Router) {
    // if(!localStorage.getItem('login')){
    //   this.router.navigate(['/login']);
    // }
  }

  ngOnInit() {
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
    c.src = "../../assets/js/jquery.swiper.js";
    this.myScript.nativeElement.appendChild(c);

    var infinitescroll = this.document.createElement("script");
    infinitescroll.type = "text/javascript";
    infinitescroll.src = "../../assets/js/jquery.infinitescroll.js";
    this.myScript.nativeElement.appendChild(infinitescroll);

    var jRespond = this.document.createElement("script");
    jRespond.type = "text/javascript";
    jRespond.src = "../../assets/js/jRespond.js";
    this.myScript.nativeElement.appendChild(jRespond);

    var Tabs = this.document.createElement("script");
    Tabs.type = "text/javascript";
    Tabs.src = "../../assets/js/plugins/jquery.tabs.js";
    this.myScript.nativeElement.appendChild(Tabs);
    
    var flickrfeed = this.document.createElement("script");
    flickrfeed.type = "text/javascript";
    flickrfeed.src = "../../assets/js/plugins/jquery.flickrfeed.js";
    this.myScript.nativeElement.appendChild(flickrfeed);

    var owlcarousel = this.document.createElement("script");
    owlcarousel.type = "text/javascript";
    owlcarousel.src = "../../assets/js/plugins/jquery.owlcarousel.js";
    this.myScript.nativeElement.appendChild(owlcarousel);

    var instagram = this.document.createElement("script");
    instagram.type = "text/javascript";
    instagram.src = "../../assets/js/plugins/jquery.instagram.js";
    this.myScript.nativeElement.appendChild(instagram);

    var youtube = this.document.createElement("script");
    youtube.type = "text/javascript";
    youtube.src = "../../assets/js/plugins/jquery.youtube.js";
    this.myScript.nativeElement.appendChild(youtube);

    var superfish = this.document.createElement("script");
    superfish.type = "text/javascript";
    superfish.src = "../../assets/js/plugins/jquery.superfish.js";
    this.myScript.nativeElement.appendChild(superfish);

    var dribbble = this.document.createElement("script");
    dribbble.type = "text/javascript";
    dribbble.src = "../../assets/js/plugins/jquery.dribbble.js";
    this.myScript.nativeElement.appendChild(dribbble);

    var twitterfeed = this.document.createElement("script");
    twitterfeed.type = "text/javascript";
    twitterfeed.src = "../../assets/js/plugins/jquery.twitterfeed.js";
    this.myScript.nativeElement.appendChild(twitterfeed);

    var twitterfeed = this.document.createElement("script");
    twitterfeed.type = "text/javascript";
    twitterfeed.src = "../../assets/js/plugins/jquery.twitterfeed.js";
    this.myScript.nativeElement.appendChild(twitterfeed);
  }
}
