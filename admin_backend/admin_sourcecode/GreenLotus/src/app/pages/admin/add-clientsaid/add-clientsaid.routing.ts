import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AddClientSaidComponent } from 'app/pages/admin/add-clientsaid/add-clientsaid.component';


export const routes: Routes = [
    {
        path: '',
        component: AddClientSaidComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
