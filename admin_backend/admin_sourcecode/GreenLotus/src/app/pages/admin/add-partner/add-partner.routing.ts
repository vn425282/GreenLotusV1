import { Routes, RouterModule } from '@angular/router';
import { AddPartnerComponent } from './add-partner.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    {
        path: '',
        component: AddPartnerComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
