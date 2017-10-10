import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Partner } from 'app/models/partner';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'listpeople',
    moduleId: module.id,
    templateUrl: 'listpeople.component.html'
})

export class ListPeopleComponent implements OnInit {
    @ViewChild('noticeModal') noticeModal: ModalComponent;

    public tableData1?: TableData;
    public flagSpinner = false;
    public currentIdPeople = '';
    public noticeMessage = '';

    constructor(public _p: AboutPeopleService, public router: Router, public _shared: SharedService) {

    }

    ngOnInit() {
        // this.flagSpinner = true;
        this.tableData1 = {
            headerRow: ['Mã nhân viên', 'Ảnh đại diện', 'Mô tả', 'Chức vụ', 'Ngôn ngữ'],
            dataRows: [

            ]
        };

        this._p.getAboutPeople().subscribe(data => {
            this.flagSpinner = false;
            for (const item of data.results) {
                let lang = 'Việt Nam';
                if (item.Lang === 'EN') {
                    lang = 'Tiếng Anh';
                }

                if (item.Description.length > 50) {
                    item.Description = item.Description.substring(0, 50) + ' ...';
                }

                this.tableData1.dataRows.push([
                    'KH-' + item.ID_AboutPeople,
                    '<img src="' + this._shared.getBaseURLWithoutFlash() + item.PictureURL + '" />',
                    item.Description,
                    item.RoleName,
                    lang
                ]);
            }
        });
    }

    addPeople() {
        this.router.navigate(['pages/admin/add-people']);
    }

    showPopUpConfirm(id) {
        this.currentIdPeople = id;
        this.noticeMessage = 'Bạn có thật sự muốn xóa ???';
        this.noticeModal.open();
    }

    deletePeople() {
        this.flagSpinner = true;
        this._p.deleteAboutPeople(this.currentIdPeople).subscribe(data => {
            this._p.getAboutPeople().subscribe(data => {
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
                        '<img src="' + this._shared.getBaseURLWithoutFlash() + item.PictureURL + '" />',
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
