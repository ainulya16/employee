import { Injectable } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface Employee {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

@Injectable({providedIn: 'root'})
export class Employees {
  dataSources: MatTableDataSource<Employee>;
  selectedEmployee: Employee
}