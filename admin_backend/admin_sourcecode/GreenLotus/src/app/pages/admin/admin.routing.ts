import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { IDCardRegisterComponent } from './idcardregister/idcardregister.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AdminComponent } from './admin.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'logout', loadChildren: './logout/logout.module#LogoutModule' },
            { path: 'list-user', loadChildren: './listusercmnd/listusercmnd.module#ListUserCMNDModule' },
            { path: 'list-partner', loadChildren: './listpartner/listpartner.module#ListPartnerModule' },
            { path: 'add-user', loadChildren: './idcardregister/idcardregister.module#ListPartnerModule' },
            { path: 'add-partner', loadChildren: './add-partner/add-partner.module#AddPartnerModule' },
            { path: 'add-people', loadChildren: './add-people/add-people.module#AddPeopleModule' },
            { path: 'update-user/:userId', loadChildren: './updateUser/updateUser.module#UpdateUserModule' },
            { path: 'update-partner/:partnerId', loadChildren: './update-partner/update-partner.module#UpdatePartnerModule' },
            { path: 'update-people/:peopleId', loadChildren: './update-people/update-people.module#UpdatePeopleModule' },
            { path: 'update-aboutus/:aboutUsId', loadChildren: './update-aboutus/update-aboutus.module#UpdateAboutUsModule' },
            { path: 'list-people', loadChildren: './listpeople/listpeople.module#ListPeopleModule' },
            { path: 'list-aboutus', loadChildren: './aboutus/aboutus.module#AboutUsModule' }
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
