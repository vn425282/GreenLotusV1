import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import * as spinner from 'ng2-component-spinner';
import { DOCUMENT } from '@angular/common';
import { BlogService } from 'app/services/blog/blog.service';
import { SharedService } from 'app/services/shared/shared.service';

declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  @ViewChild('myScript') myScript: ElementRef;

  public color = '#00f';
  public arrayListNewBog = [];
  public arrayListAllBlog = [];
  public listRootBlog = [];
  public maxNewBlog = 5;

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

    this.getAllBlog();
  }

  getAllBlog() {
    this.blogService.getAllBlog().subscribe(data => {
      console.log('getAllBlog', data);
      this.listRootBlog = data.results.reverse();

      // get new blog 
      let flag = 1;
      for (const item of this.listRootBlog) {
        if (flag > this.maxNewBlog) {
          break;
        } else {
          this.arrayListNewBog.push(item);
        }
        flag++;
      }
      
      // get All Blog
      this.arrayListAllBlog = data.results.reverse();
    });
  }
}
