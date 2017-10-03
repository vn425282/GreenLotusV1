import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './listusercmnd.routing';
import { ListUserCMNDComponent } from './listusercmnd.component';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        routing
    ],
    declarations: [
        ListUserCMNDComponent,
    ],
    providers: []
})
export class ListUserCMNDModule { }
