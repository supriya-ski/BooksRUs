import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  bookmarkCount: number = 0;

  constructor(private dataSevice: DataService) { }

  ngOnInit(): void {
    this.dataSevice.bookmarkCount.subscribe(c => this.bookmarkCount = c);
  }

}
