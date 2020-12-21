import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { Employee, Employees } from './models/employee';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})

export class EmployeeComponent implements OnInit {

  dataSource: MatTableDataSource<Employee>;
  data: Array<Employee>;
  displayedColumns: string[] = ['firstName', 'email', 'group', 'status', 'action'];
  form: FormGroup;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder,
    private employees: Employees
  ) {}

  ngOnInit(): void {
    if(!this.dataSource) {
      this.loadData();
    }
    this.buildForm();
    this.dataSource = this.employees.dataSources;
  }

  loadData() {
    this.http.get(environment.url+'/users')
    .subscribe((response:any)=>{
      this.data = response;
      this.employees.dataSources = new MatTableDataSource(response);
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      }, e => {
        this.snackBar.open(e.message || 'Failed to load data', 'dismiss', {
          verticalPosition: 'top',
          horizontalPosition: 'end'
        })
      })
  }

  buildForm() {
    this.form = this.formBuilder.group({
      firstName: [''],
      group: ['']
    });

    this.form.valueChanges.pipe(debounceTime(300))
    .subscribe(value=>{
      // const data = this.data.filter((item:Employee)=>{
      //   return item.firstName == value.firstName || item.group == value.group
      // });
      // this.dataSource = new MatTableDataSource(data);
    })
  }

  applyFilterName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterGroup(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(data: Employee) {
    const message = `${data.firstName}'s data has been updated`
    this.snackBar.open(message, 'dismiss', {
      verticalPosition: 'top',
      horizontalPosition: 'end'
    })
  }

  delete(data: Employee) {
    const message = `${data.firstName}'s data has been deleted`
    this.snackBar.open(message, 'dismiss', {
      verticalPosition: 'top',
      horizontalPosition: 'end'
    })
  }

  add() {
    this.router.navigate(['employee/add']);
  }

  detail(data: Employee) {
    this.employees.selectedEmployee = data;
    this.router.navigate(['employee/detail/', data.id], { state: {data}});
  }

}
