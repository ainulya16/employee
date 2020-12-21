import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [EmployeeComponent, AddEmployeeComponent, DetailEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class EmployeeModule { }
