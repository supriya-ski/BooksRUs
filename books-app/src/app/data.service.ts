import { Injectable } from '@angular/core';
import * as data from "./components/book-list/book-list.json";
import * as weekReadersData from "./components/book-list/weekwise-readership.json";
import { Book } from './components/book-list/model/book.model';
import { WeekReaders } from './components/book-list/model/weekReaders.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  bookName: string = '';
  private bookmarkCountSource = new BehaviorSubject(0);
  bookmarkCount = this.bookmarkCountSource.asObservable();

  constructor() { }

  getBooksList(): Book[]{
    return (data as any).default;
  }

  getWeeksReaders(): WeekReaders[] {
    return (weekReadersData as any).default;
  }

  updateBookmark(count: number){
    this.bookmarkCountSource.next(count);
  }
}
