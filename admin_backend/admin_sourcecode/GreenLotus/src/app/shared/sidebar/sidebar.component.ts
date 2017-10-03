import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: 'dashboard', title: 'Báo cáo',  icon: 'ti-panel', class: '' },
    // { path: 'idcardregister', title: 'Đăng ký người dùng',  icon:'ti-user', class: '' },
    { path: 'list-user', title: 'Danh sách người dùng',  icon: 'ti-view-list-alt', class: '' },
    { path: 'list-partner', title: 'Danh sách đối tác',  icon: 'ti-view-list-alt', class: '' },
    { path: 'logout', title: 'Đăng xuất',  icon: 'ti-spray', class: '' },
    // { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    // { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
    // { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    // { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(public shared: SharedService) {

    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        console.log(this.menuItems);
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
