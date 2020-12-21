import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';

const routes: Routes = [
  {
    path: 'add',
    component: FormEmployeeComponent
  },
  {
    path: 'detail/:id',
    component: FormEmployeeComponent
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
