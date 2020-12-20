import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Book } from './model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.books = this.dataService.getBooksList();
  }

  trackById(index: number, book: any){
    return book.id;
  }

  bookItemClick(bookItem: Book){
    this.dataService.bookName = bookItem.name;
    this.router.navigate([`/read/${bookItem.id}`]);
  }

}
