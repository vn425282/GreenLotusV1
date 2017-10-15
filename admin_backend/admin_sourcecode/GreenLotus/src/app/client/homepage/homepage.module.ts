import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './homepage.routing';
import { NguiMapModule } from '@ngui/map';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    routing
  ],
  providers: [
  ],
  bootstrap: [HomepageComponent]
})
export class PagesModule { }
