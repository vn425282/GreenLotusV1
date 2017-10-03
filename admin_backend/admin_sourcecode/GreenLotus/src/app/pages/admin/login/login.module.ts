import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LoginComponent } from './login.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        routing
    ],
    declarations: [
        LoginComponent,
    ],
    providers: []
})
export class LoginModule { }
