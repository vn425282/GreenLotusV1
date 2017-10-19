import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routing } from './contact.roating';
import { HeaderComponent } from 'app/shared/header/header.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    routing
  ],
  providers: [
  ],
  bootstrap: [ContactComponent]
})
export class ContactModule { }
