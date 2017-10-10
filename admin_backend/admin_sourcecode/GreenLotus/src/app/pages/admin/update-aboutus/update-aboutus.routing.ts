import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UpdateAboutUsComponent } from 'app/pages/admin/update-aboutus/update-aboutus.component';


export const routes: Routes = [
    {
        path: '',
        component: UpdateAboutUsComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
