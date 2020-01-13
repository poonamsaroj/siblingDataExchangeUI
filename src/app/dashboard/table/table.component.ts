import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../core/data.service'
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'qualification', 'query'];
  dataSource;
  
  constructor(private api: DataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.dataSource = new MatTableDataSource();
    this.api.getUserDetails()
    .subscribe((data) => {
      this.dataSource = data;
    })
  }
}
