import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UsersService } from 'app/services/users/users.service';
import { SharedService } from 'app/services/shared/shared.service';
import { PartnerService } from 'app/services/partner/partner.service';
import { Partner } from 'app/models/partner';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'listpartner',
    moduleId: module.id,
    templateUrl: 'listpartner.component.html'
})

export class ListPartnerComponent implements OnInit {
    public tableData1?: TableData;
    public flagSpinner = false;

    constructor(public _p: PartnerService) {

    }

    ngOnInit() {
        this.flagSpinner = true;
        this.tableData1 = {
            headerRow: ['Mã đối tác', 'Ảnh đại diện', 'Web đối tác', 'Mô tả', 'Ngôn ngữ'],
            dataRows: [

            ]
        };

        this._p.getPartner().subscribe(data => {
            this.flagSpinner = false;
            for (const item of data.results) {
                let lang = 'Việt Nam';
                if (item.Lang === 'EN') {
                    lang = 'Tiếng Anh';
                }
                this.tableData1.dataRows.push([
                    'KH-' + item.ID_AboutPartner,
                    item.PictureURL,
                    item.URLReferences,
                    item.Description,
                    item.Lang,
                    '<a href="updatePartner/' + item.ID_AboutPartner + '">Sửa</a> || <a href="#"' + item.ID_Users + '>Xoá</a>'
                ]);
            }
        });
    }
}
