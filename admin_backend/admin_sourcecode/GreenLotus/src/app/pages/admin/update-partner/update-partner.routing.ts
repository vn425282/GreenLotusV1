import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UpdatePartnerComponent } from 'app/pages/admin/update-partner/update-partner.component';


export const routes: Routes = [
    {
        path: '',
        component: UpdatePartnerComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
