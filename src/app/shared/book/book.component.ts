import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book: Book | undefined

  constructor(private router: Router) {
  }

  openDetail() {
    this.router.navigateByUrl('books/detail/' + this.book?.id)
  }
}
