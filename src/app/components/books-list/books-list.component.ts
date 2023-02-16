import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$: Observable<Page<Book> | Error>;
  public currentPage = 0;
  public min_page = 0;
  public max_page = 90;

  constructor(
    private bookService: BookService,
  ) {
  };

  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.books$ = this.bookService.getBooks({pageIndex: 0, pageSize: 15});
  };
  
  public nextPage(): void {
    // if user kept clicking past max page it will not go over it so he can return for prev page with
    // one button click
      this.currentPage++;
      if (this.currentPage > this.max_page) this.currentPage = this.max_page;
      this.books$ = this.bookService.getBooks({pageIndex: this.currentPage, pageSize: 15});
  }

  public prevPage(): void {
    // same here but for min page
    this.currentPage--;
    if(this.currentPage < this.min_page) this.currentPage = this.min_page;
    this.books$ = this.bookService.getBooks({pageIndex: this.currentPage, pageSize: 15});
}
  
}
