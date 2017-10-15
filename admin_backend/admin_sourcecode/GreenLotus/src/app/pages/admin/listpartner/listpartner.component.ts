import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PartnerService } from 'app/services/partner/partner.service';
import { Partner } from 'app/models/partner';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';

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
    @ViewChild('noticeModal') noticeModal: ModalComponent;

    public tableData1?: TableData;
    public flagSpinner = false;
    public currentIdPartner = '';
    public noticeMessage = '';

    constructor(public _p: PartnerService, public router: Router, public _shared: SharedService) {

    }

    ngOnInit() {
        // this.flagSpinner = true;
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
                    '<img width="128px;" src="' + this._shared.getBaseURLWithoutFlash() + item.PictureURL + '" />',
                    item.URLReferences,
                    item.Description,
                    lang
                ]);
            }
        });
    }

    addPartner() {
        this.router.navigate(['pages/admin/add-partner']);
    }

    showPopUpConfirm(id) {
        this.currentIdPartner = id;
        this.noticeMessage = 'Bạn có thật sự muốn xóa ???';
        this.noticeModal.open();
    }

    deletePartner() {
        this.flagSpinner = true;
        this._p.deletePartner(this.currentIdPartner).subscribe(data => {
            this._p.getPartner().subscribe(data => {
                this.tableData1.dataRows.length = 0;
                this.noticeModal.close();
                this.flagSpinner = false;
                for (const item of data.results) {
                    let lang = 'Việt Nam';
                    if (item.Lang === 'EN') {
                        lang = 'Tiếng Anh';
                    }
                    this.tableData1.dataRows.push([
                        'KH-' + item.ID_AboutPartner,
                        '<img width="128px;" src="' + this._shared.getBaseURLWithoutFlash() + item.PictureURL + '" />',
                        item.URLReferences,
                        item.Description,
                        item.Lang,
                        item.ID_AboutPartner
                    ]);
                }
            });
        });
    }
}
