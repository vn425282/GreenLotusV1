import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListNewsComponents } from './list-news.component';

export const routes: Routes = [
    {
        path: '',
        component: ListNewsComponents,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
