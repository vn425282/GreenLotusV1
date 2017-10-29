import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';
import { DOCUMENT } from '@angular/common';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';
import { SharedService } from 'app/services/shared/shared.service';
import { AboutUsService } from 'app/services/aboutus/aboutus.service';

declare var $: any;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutUsComponent implements OnInit {
  color = '#00f';
  @ViewChild('myScript') myScript: ElementRef;

  public listPeople = [];
  public listAboutPeople = [];
  public listAboutUs = [];

  constructor( @Inject(DOCUMENT) public document,
    public aboutPeopleService: AboutPeopleService,
    public aboutUsService: AboutUsService,
    public _s: SharedService,
    public router: Router) {

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

    this.aboutPeopleService.getAboutPeople().subscribe(data => {
      console.log("getAboutPeople", data);
      for (const item of data.results) {
        if (item.Type === 'people') {
          console.log("getAboutPeople", this.listPeople);
          this.listPeople.push(item);
        }

        if (item.Type === 'clientsaid') {
          this.listAboutPeople.push(item);
        }
      }
    });

    this.aboutUsService.getAboutUs().subscribe( data => {
      console.log("getAboutUs", data);
      this.listAboutUs = data.results;
    });
  }
}
