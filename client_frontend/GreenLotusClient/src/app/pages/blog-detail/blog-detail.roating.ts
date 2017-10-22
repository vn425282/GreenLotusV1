import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: BlogDetailComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
