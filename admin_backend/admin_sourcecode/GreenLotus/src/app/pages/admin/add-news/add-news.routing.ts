import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AddNewsComponents } from 'app/pages/admin/add-news/add-news.component';


export const routes: Routes = [
    {
        path: '',
        component: AddNewsComponents,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
