import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  books: Book[] = [];
  displayBooks: Book[] = [];
  searchText: string = '';
  constructor(private service: AppService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getBooks();
  }

  getBooks() {
    this.books = this.service.getBooks();
    this.displayBooks = this.books;
  }

  filterBook(str: string) {
    this.displayBooks = this.books.filter((ele) => ele.title.toLocaleLowerCase().includes(str.toLocaleLowerCase()));
  }
}
