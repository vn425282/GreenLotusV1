import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
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
  public listRootBlog = [];
  public maxNewBlog = 6;
  public arrayListNewBog = [];
  public selectedNews;
  public selectedId;
  public listRelated = [];

  @ViewChild('myScript') myScript: ElementRef;
  constructor( @Inject(DOCUMENT) public document,
    public router: Router,
    public blogService: BlogService,
    public _s: SharedService,
    private activatedRoute: ActivatedRoute, ) {
    this.getAllBlog();
  }

  ngOnInit() {
    // var s = this.document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "../../assets/js/plugins.js";
    // this.myScript.nativeElement.appendChild(s);

    // var a = this.document.createElement("script");
    // a.type = "text/javascript";
    // a.src = "../../assets/js/functions.js";
    // this.myScript.nativeElement.appendChild(a);
  }

  isNumber(val) { return typeof val === 'number'; }

  getAllBlog() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let newsId = params['id'];
      this.selectedId = newsId;
      this.blogService.getAllBlog().subscribe(data => {
        console.log('selected id', this.selectedId);
        console.log('getAllBlog', data);
        this.listRootBlog = data.results.reverse();

        // get new blog 
        let flag = 1;
        for (const item of this.listRootBlog) {
          if (flag > this.maxNewBlog) {
            
          } else {
            this.arrayListNewBog.push(item);
          }

          if(item.ID_Blog == this.selectedId){
            this.selectedNews = item;
          }

          flag++;
        }

        if(!this.selectedNews){
          this.router.navigateByUrl('pages/blog');
        }
      });
    });
  }
}
