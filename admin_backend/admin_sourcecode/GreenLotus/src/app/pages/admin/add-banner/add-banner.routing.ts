import { Routes, RouterModule } from '@angular/router';
import { AddBannerComponent } from './add-banner.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    {
        path: '',
        component: AddBannerComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
