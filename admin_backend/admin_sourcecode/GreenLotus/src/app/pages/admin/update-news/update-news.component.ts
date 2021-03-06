import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router, Params, ActivatedRoute } from '@angular/router';
import { AboutPeopleObj } from 'app/models/aboutpeople';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { UploadService } from 'app/services/upload-video/upload-video.service';
import { QuillEditorComponent } from 'ngx-quill-editor/quillEditor.component';
import { Blog } from 'app/models/blog';
import { BlogService } from 'app/services/blog/blog.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.css']
})

export class UpdateNewsComponents implements OnInit {
  @ViewChild('logo') imgLogoElement: ElementRef;
  @ViewChild('video') videoElement: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('lang') lang: ElementRef;
  @ViewChild('tag') tag: ElementRef;
  @ViewChild('noticeModal') noticeModal: ModalComponent;
  @ViewChild('editorDescription') editorDescription: QuillEditorComponent;

  public flagSpinner = false;
  public myLogoBase64String = '';
  public srcPreview = '';
  public noticeMessage = '';
  public shortPathURL = '';
  public shortPathVideoURL = '';
  public fileUploaded = '';
  public blogId;
  public myCurrentBlog: Blog;
  public mytag = '';

  constructor(public _p: UploadService,
    public router: Router,
    public _shared: SharedService,
    public _blogService: BlogService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    try {
      this.flagSpinner = true;
      this.activatedRoute.params.subscribe((params: Params) => {
        this.blogId = params['blogId'];
        this._blogService.getAllBlog().subscribe(data => {
          this.myCurrentBlog = data.results.find(x => x.ID_Blog == this.blogId);
          console.log(this.myCurrentBlog)
          if (this.myCurrentBlog) {
            this.flagSpinner = false;
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + this.myCurrentBlog.ImageTitle;
            if (this.myCurrentBlog.VideoPath) {
              this.fileUploaded = this._shared.baseURL + this.myCurrentBlog.VideoPath;
            }
            this.shortPathURL = this.myCurrentBlog.ImageTitle;
            this.shortPathVideoURL = this.myCurrentBlog.VideoPath;
            this.title.nativeElement.value = this.myCurrentBlog.Title;
            this.editorDescription.writeValue(this.myCurrentBlog.Description);
            this.lang.nativeElement.value = this.myCurrentBlog.Lang;
            this.tag.nativeElement.value = this.myCurrentBlog.Tag;
            this.mytag = this.myCurrentBlog.Tag;
          } else {
            this.router.navigate(['pages/admin/list-news']);
          }
        });
      });
    } catch (e) {
      console.log('Error at update-news', e);
    }
  }

  // readThis(inputValue: any, state: any): void {
  //   try {
  //     this.flagSpinner = true;
  //     let textBase64: string;
  //     const file: File = inputValue.files[0];
  //     const fileExtend = file.name.split('.').pop();
  //     if (fileExtend === 'jpg' || fileExtend === 'png' || fileExtend === 'gif') {
  //       const myReader: FileReader = new FileReader();

  //       myReader.onloadend = ((e) => {
  //         textBase64 = myReader.result;
  //         this.myLogoBase64String = textBase64;
  //         // this.srcPreview = textBase64;
  //         this._shared.uploadBase64ImgToServer(textBase64, 'about-clientsaid', fileExtend).subscribe(data => {
  //           this.srcPreview = this._shared.getBaseURLWithoutFlash() + data.results;
  //           this.myCurrentClientSaid.PictureURL = data.results;
  //           this.shortPathURL = data.results;
  //           this.flagSpinner = false;
  //           // this.srcPreview = data;
  //         });
  //       });
  //       myReader.readAsDataURL(file);
  //     } else {
  //       this.noticeModal.open();
  //       this.noticeMessage = 'Vui lòng chọn file hình có đuôi .jpg, .png, .gif';
  //     }
  //   } catch (e) {
  //     console.log('error at: readThis() ----- update-news.component.ts', e);
  //     this.myLogoBase64String = '';
  //     this.srcPreview = '';
  //   }
  // }

  logoChangeFU(event): void {
    try {
      this.flagSpinner = true;
      console.log('onChange');
      var files = event.srcElement.files;
      var file = files[0];
      const fileExtend = file.name.split('.').pop();
      if (fileExtend === 'mp4') {
        console.log(files);
        this._p.makeFileRequest([], files).subscribe(data => {
          // console.log('sent', data);
          this.shortPathVideoURL = data;
          this.fileUploaded = this._shared.baseURL + data;
          console.log('sent', this.fileUploaded);
          this.flagSpinner = false;
          // this.picName = fileName;
        });
      } else {
        this.noticeModal.open();
        this.noticeMessage = 'Vui lòng chọn file video có đuôi .mp4';
      }
    } catch (e) {
      this.noticeModal.open();
      this.noticeMessage = 'Đã xảy ra lỗi hệ thống ! Vui lòng load lại trang !!!';
    }
  }

  imageChange($event) {
    this.readThis($event.target, 'end');
  }

  readThis(inputValue: any, state: any): void {
    try {
      this.flagSpinner = true;
      let textBase64: string;
      const file: File = inputValue.files[0];
      const fileExtend = file.name.split('.').pop().toUpperCase();
      if (fileExtend === 'JPG' || fileExtend === 'PNG' || fileExtend === 'GIF') {
        const myReader: FileReader = new FileReader();

        myReader.onloadend = ((e) => {
          textBase64 = myReader.result;
          this.myLogoBase64String = textBase64;
          // this.srcPreview = textBase64;
          this._shared.uploadBase64ImgToServer(textBase64, 'news', fileExtend).subscribe(data => {
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + data.results;
            this.shortPathURL = data.results;
            this.flagSpinner = false;
            // this.srcPreview = data;
          });
        });
        myReader.readAsDataURL(file);
      } else {
        this.noticeModal.open();
        this.noticeMessage = 'Vui lòng chọn file hình có đuôi .jpg, .png, .gif';
      }
    } catch (e) {
      console.log('error at: readThis() ----- add-news.component.ts', e);
      this.myLogoBase64String = '';
      this.srcPreview = '';
    }
  }

  back() {
    this.router.navigate(['pages/admin/list-news']);
  }

  updateNews() {
    if (this.blogId) {
      this.flagSpinner = true;
      const blogObj: Blog = new Blog();
      blogObj.ID_Blog = this.blogId;
      blogObj.Description = this.editorDescription.editorElem.innerHTML;
      blogObj.Lang = this.lang.nativeElement.value;
      blogObj.ImageTitle = this.shortPathURL;
      blogObj.DateCreate = new Date().toLocaleString();
      blogObj.Author = this._shared.getCurrentUser();
      blogObj.Tag = this.tag.nativeElement.value;
      blogObj.VideoPath = this.shortPathVideoURL;
      blogObj.Title = this.title.nativeElement.value;

      this._blogService.updateBlog(blogObj).subscribe(data => {
        this.flagSpinner = false;
        console.log('add updateNews', data);
        this.noticeModal.open();
        this.noticeMessage = 'Sửa Tin tức / Sự kiện thành công !!!';
      });
    }
  }
}
