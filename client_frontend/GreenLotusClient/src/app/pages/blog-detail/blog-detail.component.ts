import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';
import { DOCUMENT } from '@angular/common';
import { BlogService } from 'app/services/blog/blog.service';
import { SharedService } from 'app/services/shared/shared.service';

declare var $: any;

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {
  color = '#00f';
  @ViewChild('myScript') myScript: ElementRef;
  constructor( @Inject(DOCUMENT) public document,
    public router: Router,
    public blogService: BlogService,
    public _s: SharedService) {

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
  }
}
