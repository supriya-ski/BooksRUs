import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { WeekReaders } from 'src/app/components/book-list/model/weekReaders.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  private data: WeekReaders[] = [];
  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getWeeksReaders();
    
  }

}
