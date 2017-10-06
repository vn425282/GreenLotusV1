import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UpdateUserComponent } from './updateUser.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './updateUser.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        routing
    ],
    declarations: [
        UpdateUserComponent,
    ],
    providers: []
})
export class UpdateUserModule { }
