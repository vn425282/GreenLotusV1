import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutUsComponent } from './aboutus.component';

export const routes: Routes = [
    {
        path: '',
        component: AboutUsComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
