import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { SearchBookService } from '../../../service/search-book.service'
import { CrudBookService } from '../../../service/crud-book.service'

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {


  isbn: String = '';
  bookData: any = {
    title: String,
    imgUrl: String,
    authors: Array,
    publisher: String,
    isbn_13: String,
    isbn_10: String,
    tags: Array,
    description: String
  };


  searchError: any = {
    isError: false,
    message: null,
    status: null
  };

  saveError: any = {
    isError: false,
    message: 'Cannot save your book',
    status: null
  }

  isSearchPage: Boolean = true;
  constructor(
    public dialogRef: MatDialogRef<CreateBookComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private searchBookService: SearchBookService,
    private crudBookService: CrudBookService) { }

  ngOnInit() {
  }

  saveBook() {
    this.crudBookService.saveBook(this.bookData).subscribe(data => {
      this.closeDialog()
    },err => {
      this.saveError.isError = true,
      this.saveError.status = err.status
    });
  }

  findBook() {
    return this.searchBookService.findBookByISBN(this.isbn).subscribe(data => {
      const bookInfo = data.volumeInfo
      this.mapBookModel(bookInfo)
      this.isSearchPage = false;
    }, resError => {
      this.searchError.isError = true;
      this.searchError.message = resError.error.message
      this.searchError.status = resError.status
    })
  }
  mapBookModel(bookInfo) {
    this.bookData.title = bookInfo.title
    this.bookData.imgUrl = bookInfo.imageLinks.thumbnail
    this.bookData.authors = bookInfo.authors
    this.bookData.publisher = bookInfo.publisher
    this.bookData.isbn_10 = bookInfo.industryIdentifiers.find(el => el.type === "ISBN_10").identifier
    this.bookData.isbn_13 = bookInfo.industryIdentifiers.find(el => el.type === "ISBN_13").identifier
    this.bookData.tags = bookInfo.categories
    this.bookData.description = bookInfo.description
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
