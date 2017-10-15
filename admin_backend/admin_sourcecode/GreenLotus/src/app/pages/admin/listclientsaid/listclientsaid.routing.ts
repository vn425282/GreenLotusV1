import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListClientSaid } from './listclientsaid.component';

export const routes: Routes = [
    {
        path: '',
        component: ListClientSaid,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
