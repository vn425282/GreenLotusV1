import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './listpartner.routing';
import { ListPartnerComponent } from './listpartner.component';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        routing
    ],
    declarations: [
        ListPartnerComponent,
    ],
    providers: []
})
export class ListPartnerModule { }
