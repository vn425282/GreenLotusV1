import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListPartnerComponent } from './listpartner.component';

export const routes: Routes = [
    {
        path: '',
        component: ListPartnerComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
