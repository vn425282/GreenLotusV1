import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './listclientsaid.routing';
import { ListClientSaid } from './listclientsaid.component';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        routing
    ],
    declarations: [
        ListClientSaid,
    ],
    providers: [
        AboutPeopleService
    ]
})
export class ListClientSaidModule { }
