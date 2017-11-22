import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';
import { DOCUMENT } from '@angular/common';
import { PartnerService } from 'app/services/partner/partner.service';
import { SharedService } from 'app/services/shared/shared.service';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';
import { BlogService } from 'app/services/blog/blog.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  color = '#00f';
  @ViewChild('myScript') myScript: ElementRef;

  public listPartner = [];
  public listAboutPeople = [];
  public listNews = [];
  public listProject = [];
  public checkListPartner = false;

  ngOnInit(): void {
    // var s = this.document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "../../assets/js/plugins.js";
    // this.myScript.nativeElement.appendChild(s);

    // var a = this.document.createElement("script");
    // a.type = "text/javascript";
    // a.src = "../../assets/js/functions.js";
    // this.myScript.nativeElement.appendChild(a);
  }

  constructor( @Inject(DOCUMENT) public document,
    public router: Router,
    public partnerService: PartnerService,
    public aboutPeopleService: AboutPeopleService,
    public blogService: BlogService,
    public _s: SharedService) {

    // load data
    this.loadPartner();
    this.loadClientSaid();
    this.loadBlogByNewsType();
  }

  // load projects and blogs 
  loadBlogByNewsType() {
    this.blogService.getAllBlog().subscribe(dataBlog => {
      console.log('getAllBlog', dataBlog);
      if (dataBlog.results) {
        let counter = 0;
        let counterNews = 0;
        for (let item of dataBlog.results.reverse()) {
          if (counterNews < 4 && item.Tag !== 'Dự án') {
            if(item.Title.length > 65){
              item.Title = item.Title.substring(0, 65) + ' ...';
            }
            this.listNews.push(item);
            counterNews++;
          }
          
          if(item.Tag === 'Dự án'){
            if(counter < 8){
              if(item.Title.length > 65){
                item.Title = item.Title.substring(0, 65) + ' ...';
              }
              this.listProject.push(item);
            }
          }
          counter++;
        }
        console.log('getAllBlog after get', this.listNews);
        console.log('getAllProject after get', this.listProject);
      }
    });
  }

  loadClientSaid() {
    this.aboutPeopleService.getAboutPeople().subscribe(dataAboutPeople => {
      console.log('getAboutPeople', dataAboutPeople);
      if (dataAboutPeople.results) {
        // this.listAboutPeople = dataAboutPeople.results;
        for (let item of dataAboutPeople.results) {
          if (item.Type === 'clientsaid') {
            this.listAboutPeople.push(item);
          }
        }
      }
    });
  }

  loadPartner() {
    this.partnerService.getPartner().subscribe(dataPartner => {
      console.log('getPartner', dataPartner);
        this.listPartner = dataPartner.results;
        this.checkListPartner = true;
        var owl = $("#oc-clients");
        owl.owlCarousel({
            items: dataPartner.results.length,
            navigation: true
        });
    });
  }
}
