import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Partner } from 'app/models/partner';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { AboutUsService } from 'app/services/aboutus/aboutus.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-aboutus',
    moduleId: module.id,
    templateUrl: 'aboutus.component.html'
})

export class AboutUsComponent implements OnInit {
    @ViewChild('noticeModal') noticeModal: ModalComponent;

    public tableData1?: TableData;
    public flagSpinner = false;
    public currentIdPartner = '';
    public noticeMessage = '';

    constructor(public _aboutUs: AboutUsService, public router: Router, public _shared: SharedService) {

    }

    ngOnInit() {
        // this.flagSpinner = true;
        this.tableData1 = {
            headerRow: ['Số thứ tự', 'Mô tả', 'Vì sao chọn chúng tôi', 'Sứ mệnh', 'Ngôn ngữ', 'Công cụ'],
            dataRows: [

            ]
        };

        this._aboutUs.getAboutUs().subscribe(data => {
            this.flagSpinner = false;
            for (const item of data.results) {
                let lang = 'Việt Nam';
                if (item.Lang === 'en') {
                    lang = 'Tiếng Anh';
                }

                if(item.Description.length > 100)
                {
                    item.Description = '<a href="/pages/admin/update-aboutus/' + item.ID_AboutUs + '">Xem chi tiết</a>'
                }

                if(item.WhyChoose.length > 100)
                {
                    item.WhyChoose = '<a href="/pages/admin/update-aboutus/' + item.ID_AboutUs + '">Xem chi tiết</a>'
                }

                if(item.OurMission.length > 100)
                {
                    item.OurMission = '<a href="/pages/admin/update-aboutus/' + item.ID_AboutUs + '">Xem chi tiết</a>'
                }

                this.tableData1.dataRows.push([
                    item.ID_AboutUs,
                    item.Description,
                    item.WhyChoose,
                    item.OurMission,
                    lang
                ]);
            }
        });
    }
}
