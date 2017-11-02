import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { routing } from './blog.roating';
import { HeaderComponent } from 'app/shared/header/header.component';
import { BlogService } from 'app/services/blog/blog.service';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: [
    BlogService
  ],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
