import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UpdatePartnerComponent } from './update-partner.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './update-partner.routing';
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
        UpdatePartnerComponent,
    ],
    providers: [
        PartnerService
    ]
})
export class UpdatePartnerModule { }
