import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/services/users/users.service";
import { Router } from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'listpartner',
    moduleId: module.id,
    templateUrl: 'listpartner.component.html'
})

export class ListPartner implements OnInit {
    public tableData1?: TableData;
    public flagSpinner: boolean = false;

    constructor(public usersService: UsersService, public router: Router) {

    }

    ngOnInit() {
        this.flagSpinner = true;
        this.tableData1 = {
            headerRow: ['Số thứ tự', 'Hình', 'Địa chỉ trỏ tới khi click', 'Công cụ'],
            dataRows: [

            ]
        };

        this.usersService.getUsers().subscribe(data => {
            this.flagSpinner = false;
            for (let item of data.results) {
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
                    '<a href="updateUser/' + item.ID_Users + '">Sửa</a>'
                ]);
            }
        });
    }

    goAddUser() {
        this.router.navigate(['idcardregister']);
    }
}
