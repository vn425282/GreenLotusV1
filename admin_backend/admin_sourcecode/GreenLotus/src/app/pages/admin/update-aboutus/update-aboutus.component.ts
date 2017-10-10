import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { PartnerService } from 'app/services/partner/partner.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'app/services/shared/shared.service';
import { Partner } from 'app/models/partner';
import { AboutUsService } from 'app/services/aboutus/aboutus.service';
import { QuillEditorComponent } from 'ngx-quill-editor/quillEditor.component';

@Component({
  selector: 'app-update-us',
  templateUrl: './update-aboutus.component.html',
  styleUrls: ['./update-aboutus.component.css']
})
export class UpdateAboutUsComponent implements OnInit {
  @ViewChild('logo') imgLogo: ElementRef;
  @ViewChild('urlReferences') urlReferences: ElementRef;
  @ViewChild('description') description: QuillEditorComponent;
  @ViewChild('lang') lang: ElementRef;
  @ViewChild('noticeModal') noticeModal: ModalComponent;

  public flagSpinner = false;
  public myLogoBase64String = '';
  public srcPreview = '';
  public noticeMessage = '';
  public shortPathURL = '';
  public myCurrentAboutUs: any;
  public editorContent = '';
  public content = '<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p>dsadasdsad<img src="data:image/png;base64,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"></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>';

  constructor(public _p: AboutUsService, public router: Router, public _shared: SharedService, private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    try {
      this.flagSpinner = true;
      this.activatedRoute.params.subscribe((params: Params) => {
        const aboutUsId = params['aboutUsId'];
        this._p.getAboutUs().subscribe(data => {
          this.myCurrentAboutUs = data.results.find(x => x.ID_AboutUs == aboutUsId);
          console.log(this.myCurrentAboutUs)
          if (this.myCurrentAboutUs) {
            this.flagSpinner = false;
            // this.description.editorElem.innerText = 'dasdsa';
            // this.srcPreview = this._shared.getBaseURLWithoutFlash() + this.myCurrentParner.PictureURL;
            // this.shortPathURL = this.myCurrentParner.PictureURL;
            // this.urlReferences.nativeElement.value = this.myCurrentParner.URLReferences;
            // this.description.nativeElement.value = this.myCurrentParner.Description;
            // this.lang.nativeElement.value = this.myCurrentParner.Lang;
          } else {
            this.router.navigate(['pages/admin/list-partner']);
          }
        });
      });
    } catch (e) {
      console.log('Error at update-partner', e);
    }
  }

  logoChangeFU($event): void {
    this.readThis($event.target, 'end');
  }

  readThis(inputValue: any, state: any): void {
    try {
      this.flagSpinner = true;
      let textBase64: string;
      const file: File = inputValue.files[0];
      const fileExtend = file.name.split('.').pop();
      if (fileExtend === 'jpg' || fileExtend === 'png' || fileExtend === 'gif') {
        const myReader: FileReader = new FileReader();

        myReader.onloadend = ((e) => {
          textBase64 = myReader.result;
          this.myLogoBase64String = textBase64;
          // this.srcPreview = textBase64;
          this._shared.uploadBase64ImgToServer(textBase64, 'partner', fileExtend).subscribe(data => {
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + data.results;
            // this.myCurrentParner.PictureURL = data.results;
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
      console.log('error at: readThis() ----- add-partner.component.ts', e);
      this.myLogoBase64String = '';
      this.srcPreview = '';
    }
  }

  back() {
    this.router.navigate(['pages/admin/list-partner']);
  }

  updateAboutUs() {
    console.log(this.description);
    // this.flagSpinner = true;
    // const pObject: Partner = new Partner();
    // pObject.idAboutPartner = this.myCurrentParner.ID_AboutPartner;
    // pObject.description = this.description.nativeElement.value;
    // pObject.lang = this.lang.nativeElement.value;
    // pObject.urlReferences = this.urlReferences.nativeElement.value;
    // pObject.pictureURL = this.shortPathURL;
    // this._p.updatePartner(pObject).subscribe(data => {
    //   this.flagSpinner = false;
    //   console.log('addPartner', data);
    //   this.noticeModal.open();
    //   this.noticeMessage = 'Cập nhật đối tác thành công !!!';
    // });
  }

  
}
