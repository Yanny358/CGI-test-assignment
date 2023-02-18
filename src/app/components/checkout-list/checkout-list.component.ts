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

    public currentPage = 0;
    public min_page = 0;
    public max_page = 67;  // total elements is 334

    constructor(
        private checkoutService: CheckoutService,
    ) {
    };

    ngOnInit(): void {
        this.checkouts$ = this.checkoutService.getCheckouts({pageIndex: 0, pageSize: 5});
      };

      public nextPage(): void {
        // if user kept clicking past max page it will not go over it so he can return for prev page with
        // one button click
          this.currentPage++;
          if (this.currentPage > this.max_page) this.currentPage = this.max_page;
          this.checkouts$ = this.checkoutService.getCheckouts({pageIndex: this.currentPage, pageSize: 5});
      }
    
      public prevPage(): void {
        // same here but for min page
        this.currentPage--;
        if(this.currentPage < this.min_page) this.currentPage = this.min_page;
        this.checkouts$ = this.checkoutService.getCheckouts({pageIndex: this.currentPage, pageSize: 5});
      }
}