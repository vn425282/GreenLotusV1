import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BlogDetailComponent } from './blog-detail.component';
import { routing } from './blog-detail.roating';
import { HeaderComponent } from 'app/shared/header/header.component';
import { SharedService } from 'app/services/shared/shared.service';
import { BlogService } from 'app/services/blog/blog.service';

@NgModule({
  declarations: [
    BlogDetailComponent
  ],
  imports: [
    routing
  ],
  providers: [
    BlogService,
    SharedService
  ],
  bootstrap: [BlogDetailComponent]
})
export class BlogDetailModule { }
