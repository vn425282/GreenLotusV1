import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UpdateClientSaidComponent } from 'app/pages/admin/update-clientsaid/update-clientsaid.component';

export const routes: Routes = [
    {
        path: '',
        component: UpdateClientSaidComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
