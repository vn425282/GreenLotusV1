import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Partner } from 'app/models/partner';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { BlogService } from 'app/services/blog/blog.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-list-news',
    moduleId: module.id,
    templateUrl: 'list-news.component.html'
})

export class ListNewsComponents implements OnInit {
    @ViewChild('noticeModal') noticeModal: ModalComponent;

    public tableData1?: TableData;
    public flagSpinner = false;
    public currentIdBlog = '';
    public noticeMessage = '';

    constructor(public _p: BlogService, public router: Router, public _shared: SharedService) {

    }

    ngOnInit() {
        // this.flagSpinner = true;
        this.tableData1 = {
            headerRow: ['Mã', 'Ảnh đại diện', 'Tiêu đề ', 'Ngày tạo', 'Thuộc mục', 'Ngôn ngữ'],
            dataRows: [

            ]
        };

        this._p.getAllBlog().subscribe(data => {
            console.log(data);
            this.flagSpinner = false;
            for (const item of data.results) {
                let lang = 'Việt Nam';
                if (item.Lang === 'EN') {
                    lang = 'Tiếng Anh';
                }
                
                if (item.Title) {
                    if (item.Title.length > 50) {
                        item.Title = item.Title.substring(0, 50) + ' ...';
                    }
                }

                this.tableData1.dataRows.push([
                    'KH-' + item.ID_Blog,
                    '<img width="200px;" src="' + this._shared.getBaseURLWithoutFlash() + item.ImageTitle + '" />',
                    item.Title,
                    item.DateCreate,
                    item.Tag,
                    lang
                ]);
            }
        });
    }

    addBlog() {
        this.router.navigate(['pages/admin/add-news']);
    }

    showPopUpConfirm(id) {
        this.currentIdBlog = id;
        this.noticeMessage = 'Bạn có thật sự muốn xóa ???';
        this.noticeModal.open();
    }

    deleteBlog() {
        this.flagSpinner = true;
        this._p.deleteBlog(this.currentIdBlog).subscribe(data => {
            this._p.getAllBlog().subscribe(data => {
                this.tableData1.dataRows.length = 0;
                this.noticeModal.close();
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
                        'KH-' + item.ID_Blog,
                        '<img width="200px;" src="' + this._shared.getBaseURLWithoutFlash() + item.ImageTitle + '" />',
                        item.Description,
                        item.DateCreate,
                        item.Tag,
                        lang
                    ]);
                }
            });
        });
    }
}
