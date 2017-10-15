import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'app/shared/header/header.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})

export class HeaderModule {}
