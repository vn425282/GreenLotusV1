import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'admin', pathMatch: 'full' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
