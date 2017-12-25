import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { AddBannerComponent } from './add-banner.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { routing } from './add-banner.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BannerService } from 'app/services/banner/banner.service';

@NgModule({
    imports: [
        CommonModule,
        SpinnerComponentModule,
        Ng2Bs3ModalModule,
        routing
    ],
    declarations: [
        AddBannerComponent
    ],
    providers: [
        BannerService
    ]
})
export class AddBannerModule { }
