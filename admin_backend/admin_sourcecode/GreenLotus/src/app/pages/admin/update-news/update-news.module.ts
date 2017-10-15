import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './update-news.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { UpdateNewsComponents } from 'app/pages/admin/update-news/update-news.component';
import { UploadService } from 'app/services/upload-video/upload-video.service';
import { QuillEditorModule } from 'ng2-quill-editor';
import { BlogService } from 'app/services/blog/blog.service';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        QuillEditorModule,
        routing
    ],
    declarations: [
        UpdateNewsComponents
    ],
    providers: [
        UploadService,
        BlogService
    ]
})
export class UpdateNewsModule { }
