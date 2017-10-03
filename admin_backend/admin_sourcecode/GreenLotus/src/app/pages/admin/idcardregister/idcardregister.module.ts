import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { IDCardRegisterComponent } from 'app/pages/admin/idcardregister/idcardregister.component';
import { routing } from 'app/pages/admin/idcardregister/idcardregister.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        routing
    ],
    declarations: [
        IDCardRegisterComponent
    ],
    providers: []
})
export class ListPartnerModule { }
