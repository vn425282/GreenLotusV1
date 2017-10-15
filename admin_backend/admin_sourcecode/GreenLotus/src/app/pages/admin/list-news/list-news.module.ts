import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './list-news.routing';
import { ListNewsComponents } from './list-news.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BlogService } from 'app/services/blog/blog.service';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        routing
    ],
    declarations: [
        ListNewsComponents,
    ],
    providers: [
        BlogService
    ]
})
export class ListNewsModule { }
