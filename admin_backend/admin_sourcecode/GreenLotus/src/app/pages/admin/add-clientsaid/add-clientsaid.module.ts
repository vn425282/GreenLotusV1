import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './add-clientsaid.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';
import { AddClientSaidComponent } from 'app/pages/admin/add-clientsaid/add-clientsaid.component';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        routing
    ],
    declarations: [
        AddClientSaidComponent
    ],
    providers: [
        AboutPeopleService
    ]
})
export class AddClientSaidModule { }
