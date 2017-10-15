import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { PartnerService } from 'app/services/partner/partner.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'app/services/shared/shared.service';
import { Partner } from 'app/models/partner';
import { AboutUsService } from 'app/services/aboutus/aboutus.service';
import { QuillEditorComponent } from 'ngx-quill-editor/quillEditor.component';
import { AboutUs } from 'app/models/aboutus';

@Component({
  selector: 'app-update-us',
  templateUrl: './update-aboutus.component.html',
  styleUrls: ['./update-aboutus.component.css']
})
export class UpdateAboutUsComponent implements OnInit {
  @ViewChild('logo') imgLogo: ElementRef;
  @ViewChild('urlReferences') urlReferences: ElementRef;
  @ViewChild('lang') lang: ElementRef;
  @ViewChild('noticeModal') noticeModal: ModalComponent;
  @ViewChild('editorDescription') editorDescription: QuillEditorComponent;
  @ViewChild('editorWhyChoose') editorWhyChoose: QuillEditorComponent;
  @ViewChild('editorOurMission') editorOurMission: QuillEditorComponent;
  
  public flagSpinner = false;
  public myLogoBase64String = '';
  public srcPreview = '';
  public noticeMessage = '';
  public shortPathURL = '';
  public myCurrentAboutUs: any;

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
            this.editorDescription.writeValue(this.myCurrentAboutUs.Description)
            this.editorWhyChoose.writeValue(this.myCurrentAboutUs.WhyChoose);
            this.editorOurMission.writeValue(this.myCurrentAboutUs.OurMission);
          } else {
            this.router.navigate(['pages/admin/list-aboutus']);
          }
        });
      });
    } catch (e) {
      console.log('Error at update-aboutus', e);
    }
  }

  back() {
    this.router.navigate(['pages/admin/list-aboutus']);
  }

  updateAboutUs() {
    this.flagSpinner = true;
    let s = new AboutUs();
    s.ourmission = this.editorOurMission.editorElem.innerHTML;
    s.idAboutUs = this.myCurrentAboutUs.ID_AboutUs;
    s.whychoose = this.editorWhyChoose.editorElem.innerHTML;
    s.description = this.editorDescription.editorElem.innerHTML;

    this._p.updateAboutUs(s).subscribe(data => {
      this.flagSpinner = false;
      console.log(data);
      this.noticeModal.open();
      this.noticeMessage = 'Cập nhập thông tin thành công !!!'
    });
    // console.log(this.editorContent);
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
