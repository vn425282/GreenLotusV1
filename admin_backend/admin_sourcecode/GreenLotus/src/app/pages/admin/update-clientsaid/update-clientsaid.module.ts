import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UpdateClientSaidComponent } from './update-clientsaid.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './update-clientsaid.routing';
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
        UpdateClientSaidComponent,
    ],
    providers: [
        AboutPeopleService
    ]
})
export class UpdateClientSaidModule { }
