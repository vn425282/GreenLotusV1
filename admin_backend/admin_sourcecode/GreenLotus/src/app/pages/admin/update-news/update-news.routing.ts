import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UpdateNewsComponents } from 'app/pages/admin/update-news/update-news.component';


export const routes: Routes = [
    {
        path: '',
        component: UpdateNewsComponents,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
