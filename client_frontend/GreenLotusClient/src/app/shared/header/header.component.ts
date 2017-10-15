import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html'
  })

export class HeaderComponent implements OnInit {
    constructor(public shared: SharedService) {
        
    }

    ngOnInit() {

    }
}
