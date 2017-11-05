import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './aboutus.routing';
import { AboutUsComponent } from './aboutus.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AboutUsService } from 'app/services/aboutus/aboutus.service';
import { QuillEditorModule } from 'ng2-quill-editor';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        QuillEditorModule,
        routing
    ],
    declarations: [
        AboutUsComponent,
    ],
    providers: [
        AboutUsService
    ]
})
export class AboutUsModule { }
