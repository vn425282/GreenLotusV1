import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './logout.routing';
import { LogoutComponent } from 'app/pages/admin/logout/logout.component';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        routing
    ],
    declarations: [
        LogoutComponent,
    ],
    providers: []
})
export class LogoutModule { }
