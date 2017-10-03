import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { IDCardRegisterComponent } from 'app/pages/admin/idcardregister/idcardregister.component';

export const routes: Routes = [
    {
        path: '',
        component: IDCardRegisterComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
