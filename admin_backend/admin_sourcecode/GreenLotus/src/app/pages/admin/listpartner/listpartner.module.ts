import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './listpartner.routing';
import { ListPartnerComponent } from './listpartner.component';
import { PartnerService } from '../../../services/partner/partner.service';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        routing
    ],
    declarations: [
        ListPartnerComponent,
    ],
    providers: [
        PartnerService
    ]
})
export class ListPartnerModule { }
