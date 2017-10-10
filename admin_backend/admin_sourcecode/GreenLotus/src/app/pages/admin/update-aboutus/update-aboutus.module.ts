import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './update-aboutus.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { QuillEditorModule } from 'ng2-quill-editor';
import { UpdateAboutUsComponent } from 'app/pages/admin/update-aboutus/update-aboutus.component';
import { AboutUsService } from 'app/services/aboutus/aboutus.service';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        QuillEditorModule,
        routing
    ],
    declarations: [
        UpdateAboutUsComponent,
    ],
    providers: [
        AboutUsService
    ]
})
export class UpdateAboutUsModule { }
