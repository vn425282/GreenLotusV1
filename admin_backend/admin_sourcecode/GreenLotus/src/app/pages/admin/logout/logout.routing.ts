import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LogoutComponent } from 'app/pages/admin/logout/logout.component';


export const routes: Routes = [
    {
        path: '',
        component: LogoutComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
