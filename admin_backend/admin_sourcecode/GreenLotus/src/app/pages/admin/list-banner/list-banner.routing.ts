import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListBannerComponent } from './list-banner.component';

export const routes: Routes = [
    {
        path: '',
        component: ListBannerComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
