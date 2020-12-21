import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { Employee } from './models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})

export class EmployeeComponent implements OnInit {

  dataSource: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['firstName', 'email', 'group', 'status', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  
  loadData() {
    this.http.get(environment.url+'/users')
    .subscribe((response:any)=>{
      console.log(response);
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      }, e => {
        console.log(e);
      })
  }

}
