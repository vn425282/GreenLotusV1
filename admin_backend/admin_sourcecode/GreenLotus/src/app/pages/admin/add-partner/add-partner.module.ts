import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { AddPartnerComponent } from './add-partner.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './add-partner.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { PartnerService } from 'app/services/partner/partner.service';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        routing
    ],
    declarations: [
        AddPartnerComponent
    ],
    providers: [
        PartnerService
    ]
})
export class AddPartnerModule { }
