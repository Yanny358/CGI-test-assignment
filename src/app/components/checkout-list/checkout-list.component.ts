import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Checkout } from '../../models/checkout';

@Component({
    selector: 'app-checkouts-list',
    templateUrl: './checkout-list.component.html',
    styleUrls: ['./checkout-list.component.scss']
})

export class CheckoutListComponent implements OnInit {

    checkouts$: Observable<Page<Checkout> | Error>;

    constructor(
        private checkoutService: CheckoutService,
    ) {
    };

    ngOnInit(): void {
        this.checkouts$ = this.checkoutService.getCheckouts({pageIndex: 0, pageSize: 5});
      };
}