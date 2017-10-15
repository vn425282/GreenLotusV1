import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { HeaderComponent } from 'app/shared/header/header.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    routing
  ],
  providers: [
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
