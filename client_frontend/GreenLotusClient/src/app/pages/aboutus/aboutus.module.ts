import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';
import { AboutUsComponent } from './aboutus.component';
import { routing } from './aboutus.roating';
import { HeaderComponent } from 'app/shared/header/header.component';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';
import { AboutUsService } from 'app/services/aboutus/aboutus.service';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: [
    AboutPeopleService,
    AboutUsService
  ],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }
