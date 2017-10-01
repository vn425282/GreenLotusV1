import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { IDCardRegisterComponent }   from './idcardregister/idcardregister.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { ListUserCMNDComponent } from "app/listusercmnd/listusercmnd.component";
import { LoginComponent } from "app/login/login.component";
import { LogoutComponent } from "app/logout/logout.component";
import { UpdateUserComponent } from 'app/updateUser/updateUser.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'updateUser/:userId',
        component: UpdateUserComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'idcardregister',
        component: IDCardRegisterComponent
    },
    {
        path: 'listusercmnd',
        component: ListUserCMNDComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
]
