import { CurrencyPipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.sass'],
  providers: [
    CurrencyPipe
  ]
})
export class FormEmployeeComponent implements OnInit {
  form: FormGroup;
  showAddNewButton: boolean = true;
  maxDate: any = new Date();
  groups: Array<any> = [
    { label: 'Operations', value: 'Operations'},
    { label: 'Technology', value: 'Technology'},
    { label: 'Finance', value: 'Finance'},
    { label: 'Sales', value: 'Sales'},
    { label: 'Warehouse', value: 'Warehouse'},
    { label: 'Communications', value: 'Communications'},
    { label: 'Research', value: 'Research'},
    { label: 'Account', value: 'Account'},
    { label: 'Response', value: 'Response'},
    { label: 'Markets', value: 'Markets'},
  ]
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private currencyPipe: CurrencyPipe
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
    const { data } = history.state;
    if(data) {
      this.data = data;
      this.showAddNewButton = false
      this.form.addControl('id', new FormControl())
      this.form.setValue(data);
      this.form.get('basicSalary').setValue(this.currencyPipe.transform(data.basicSalary, 'Rp.'))
      this.form.disable();
    }
  }

  onSubmit() {
    if(this.form.invalid) {
      return
    }
    this.location.back();
  }

  back() {
    this.location.back();
  }

}
