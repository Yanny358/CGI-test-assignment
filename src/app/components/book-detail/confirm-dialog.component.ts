import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BookService } from "src/app/services/book.service";

@Component({
    selector: 'confirm-dialog',
    templateUrl: 'confirm-dialog.component.html',
  })
  export class ConfirmDialogComponent {
    

    id: string;

    constructor(
      public dialogRef: MatDialogRef<ConfirmDialogComponent>,
      private bookService: BookService,
      @Inject(MAT_DIALOG_DATA) public data) {
        this.id = data.id
      }
  
    public deleteBook(): void {
      this.bookService.deleteBook(this.data.bookId);
      this.dialogRef.close();
    }
    public cancelDelete(): void {
      this.dialogRef.close();
    }
  }