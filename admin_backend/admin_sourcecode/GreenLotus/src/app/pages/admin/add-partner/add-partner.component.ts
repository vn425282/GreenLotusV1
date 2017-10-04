import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../../services/partner/partner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.css']
})
export class AddPartnerComponent implements OnInit {

  constructor(public _p: PartnerService, public router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pages/admin/list-partner']);
  }

}
