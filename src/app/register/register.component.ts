import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dataForm: FormGroup;
  date;
  showAge;

  dispAge: any;

  constructor(public builder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.dataForm = this.builder.group({
      fname: ['', Validators.required],
      mname: [''],
      lname: ['', Validators.required], 
      dob: ['', Validators.required],
      age:[''],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[9876]+.*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).*$')]],
      confirmPassword: ["",[Validators.required, ]]

    },{validator: this.ConfirmPassword('password', 'confirmPassword')})
 }

 ConfirmPassword(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

ageCalculator(){
  if(this.date){
    const convertAge = new Date(this.date);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    this.dataForm.value.age = this.showAge;
    return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
}

onHandleSubmit(){
  console.log(this.dataForm.value);
  const key="store1";
  //const key1 = "token1"
  console.log(this.dataForm.value);
  localStorage.setItem(key, JSON.stringify(this.dataForm.value));
  //localStorage.setItem(key1, JSON.stringify(this.dispAge.value));
  this.router.navigate(["/about-us"]);
}











}
