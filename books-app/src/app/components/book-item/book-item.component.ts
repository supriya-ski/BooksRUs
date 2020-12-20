import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookItemComponent implements OnInit {

  selectedBookName: string = '';
  private count: number = 0;

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.selectedBookName = this.dataService.bookName;
    this.dataService.bookmarkCount.subscribe(c => this.count = c);
  }

  addToBookmark() {
    this.dataService.updateBookmark(this.count + 1);
  }

}
