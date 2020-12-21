import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from '../../models/employee';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.sass']
})
export class FormEmployeeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employees: Employees
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl('', [Validators.required]),
      basicSalary: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    const data = this.employees.selectedEmployee;
    if(data) {
      this.form.addControl('id', new FormControl())
      this.form.setValue(data);
      this.form.disable();
    }
  }

}
