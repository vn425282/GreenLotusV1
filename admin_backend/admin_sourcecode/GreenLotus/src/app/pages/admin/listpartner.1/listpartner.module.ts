import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './listpartner.routing';
import { ListPartnerComponent } from './listpartner.component';
import { PartnerService } from '../../../services/partner/partner.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
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
