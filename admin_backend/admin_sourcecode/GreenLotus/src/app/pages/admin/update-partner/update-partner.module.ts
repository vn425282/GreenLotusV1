import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UpdatePartnerComponent } from './update-partner.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './update-partner.routing';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        routing
    ],
    declarations: [
        UpdatePartnerComponent,
    ],
    providers: []
})
export class UpdatePartnerModule { }
