import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutUsModule' },
            { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
            { path: 'blog-detail', loadChildren: './blog-detail/blog-detail.module#BlogDetailModule' },
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
