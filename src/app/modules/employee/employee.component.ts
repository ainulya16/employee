import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackBar: MatSnackBar
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

  edit(data) {
    const message = `${data.firstName}'s data has been updated`
    this.snackBar.open(message, 'dismiss', {
      verticalPosition: 'top',
      horizontalPosition: 'end'
    })
  }

  delete(data) {
    const message = `${data.firstName}'s data has been deleted`
    this.snackBar.open(message, 'dismiss', {
      verticalPosition: 'top',
      horizontalPosition: 'end'
    })
  }

}
