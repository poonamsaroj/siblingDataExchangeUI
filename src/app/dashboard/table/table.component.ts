import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service'
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserElements {
  name: string;
  email: number;
  qualification: number;
  query: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'qualification', 'query'];
  dataSource;
  
  constructor(private api: DataService) { 

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.api.getUserDetails()
    .subscribe((data) => {
      this.dataSource = data;
    })
  }

}
