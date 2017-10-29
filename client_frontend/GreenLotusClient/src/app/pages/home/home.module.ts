import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { HeaderComponent } from 'app/shared/header/header.component';
import { PartnerService } from 'app/services/partner/partner.service';
import { SharedService } from 'app/services/shared/shared.service';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';
import { BlogService } from 'app/services/blog/blog.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: [
    PartnerService,
    AboutPeopleService,
    BlogService,
    SharedService
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
