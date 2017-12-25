import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { BannerObj } from 'app/models/banner';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { BannerService } from 'app/services/banner/banner.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'list-banner',
    moduleId: module.id,
    templateUrl: 'list-banner.component.html'
})

export class ListBannerComponent implements OnInit {
    @ViewChild('noticeModal') noticeModal: ModalComponent;

    public tableData1?: TableData;
    public flagSpinner = false;
    public currentIdBanner = '';
    public noticeMessage = '';

    constructor(public _p: BannerService, public router: Router, public _shared: SharedService) {

    }

    ngOnInit() {
        // this.flagSpinner = true;
        this.tableData1 = {
            headerRow: ['Mã Banner', 'Ảnh đại diện'],
            dataRows: [

            ]
        };

        this._p.getBanner().subscribe(data => {
            this.flagSpinner = false;
            for (const item of data.results) {
                this.tableData1.dataRows.push([
                    'BN-' + item.ID_Banner,
                    '<img width="800px;" src="' + this._shared.getBaseURLWithoutFlash() + item.BannerURL + '" />'
                ]);
            }
        });
    }

    addBanner() {
        this.router.navigate(['pages/admin/add-banner']);
    }

    showPopUpConfirm(id) {
        this.currentIdBanner = id;
        this.noticeMessage = 'Bạn có thật sự muốn xóa ???';
        this.noticeModal.open();
    }

    deleteBanner() {
        this.flagSpinner = true;
        this._p.deleteBanner(parseInt(this.currentIdBanner, 10)).subscribe(data => {
            this._p.getBanner().subscribe(data => {
                this.tableData1.dataRows.length = 0;
                this.noticeModal.close();
                this.flagSpinner = false;
                for (const item of data.results) {
                    this.tableData1.dataRows.push([
                        'BN-' + item.ID_Banner,
                        '<img width="800px;" src="' + this._shared.getBaseURLWithoutFlash() + item.BannerURL + '" />'
                    ]);
                }
            });
        });
    }
}
