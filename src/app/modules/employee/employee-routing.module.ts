import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddEmployeeComponent
  },
  {
    path: 'detail/:id',
    component: DetailEmployeeComponent
  },
  {
    path: '',
    component: EmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
