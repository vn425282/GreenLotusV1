import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/services/users/users.service";
import { Router } from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'listusercmnd',
    moduleId: module.id,
    templateUrl: 'listusercmnd.component.html',
    styleUrls: ['listusercmnd.css']
})

export class ListUserCMNDComponent implements OnInit {
    public tableData1?: TableData;
    public flagSpinner = false;

    constructor(public usersService: UsersService, public router: Router) {

    }

    ngOnInit() {
        this.flagSpinner = true;
        this.tableData1 = {
            headerRow: ['Mã người dùng', 'Tên', 'Địa chỉ', 'Email', 'Quyền hạn', 'Trạng thái', 'Công cụ'],
            dataRows: [

            ]
        };

        this.usersService.getUsers().subscribe(data => {
            this.flagSpinner = false;
            for (const item of data.results) {
                let status = 'Đã khóa';
                if (item.Status) {
                    status = 'Đang hoạt động';
                }
                this.tableData1.dataRows.push([
                    'KH-' + item.ID_Users,
                    item.Username,
                    item.Address,
                    item.Email,
                    item.Name,
                    status,
                    '<a href="pages/admin/update-user/' + item.ID_Users + '">Sửa</a>'
                ]);
            }
        });
    }

    goAddUser() {
        this.router.navigate(['pages/admin/add-user']);
    }
}
