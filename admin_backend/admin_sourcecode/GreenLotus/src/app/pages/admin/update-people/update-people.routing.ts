import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UpdatePeopleComponent } from 'app/pages/admin/update-people/update-people.component';


export const routes: Routes = [
    {
        path: '',
        component: UpdatePeopleComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
