import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  Types =
    {
      fiction: 'Fiction',
      nonfiction: 'Non-fiction',
      self_help: 'Self-help',
      mystery: 'Mystery',
      science_fiction: 'Science fiction and fantasy'
    }

  books: Book[] = [
    {
      title: 'Book 1',
      id: 1,
      description: `
      this is description about book
      `,
      image: 'assets/images/book3.jpg',
      quantity: 10,
      type: this.Types.fiction
    },
    {
      title: 'Book 2',
      id: 12,
      description: `
      this is description about book
      `,
      image: 'assets/images/book1.jpg',
      quantity: 10,
      type: this.Types.mystery
    },
    {
      title: 'Book 3',
      id: 11,
      description: `
      this is description about book
      `,
      image: 'assets/images/book4.jpg',
      quantity: 10,
      type: this.Types.fiction
    },
    {
      title: 'Book title 1',
      id: 10,
      description: `
      this is description about book
      `,
      image: 'assets/images/book3.jpg',
      quantity: 10,
      type: this.Types.science_fiction
    },
    {
      title: 'Book title 2',
      id: 9,
      description: `
      this is description about book
      `,
      image: 'assets/images/book1.jpg',
      quantity: 10,
      type: this.Types.mystery
    },
    {
      title: 'Book title 3',
      id: 8,
      description: `
      this is description about book
      `,
      image: 'assets/images/book2.jpg',
      quantity: 10,
      type: this.Types.fiction
    },
    {
      title: 'Book title 4',
      id: 7,
      description: `
      this is description about book
      `,
      image: 'https://designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
      quantity: 10,
      type: this.Types.science_fiction
    },
    {
      title: 'Book title 5',
      id: 6,
      description: `
      this is description about book
      `,
      image: 'assets/images/book4.jpg',
      quantity: 10,
      type: this.Types.mystery
    },
    {
      title: 'Book 4',
      id: 5,
      description: `
      this is description about book
      `,
      image: 'assets/images/book3.jpg',
      quantity: 10,
      type: this.Types.fiction
    },
    {
      title: 'Book 5',
      id: 4,
      description: `
      this is description about book
      `,
      image: 'assets/images/book1.jpg',
      quantity: 10,
      type: this.Types.mystery
    },
    {
      title: 'Book 7',
      id: 1,
      description: `
      this is description about book
      `,
      image: 'assets/images/book4.jpg',
      quantity: 10,
      type: this.Types.science_fiction
    },
    {
      title: 'Book 8',
      id: 2,
      description: `
      this is description about book
      `,
      image: 'assets/images/book2.jpg',
      quantity: 10,
      type: this.Types.science_fiction
    },
  ]
  constructor() { }

  getBooks() {
    return this.books;
  }

  getBook(id: any) {
    const book = this.books.filter((ele) => ele.id == id);
    return book[0];
  }
}
