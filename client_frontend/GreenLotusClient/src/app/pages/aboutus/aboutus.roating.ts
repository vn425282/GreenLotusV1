import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './aboutus.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: AboutUsComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
