import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.css']
})
export class Link1Component implements OnInit {

  dataForm: FormGroup

  constructor(public builder: FormBuilder, public router:Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.dataForm = this.builder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      uname: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z]*[A-Z]+[a-zA-Z]*$')]], 
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]],
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
  


   onHandleSubmit(){
    console.log(this.dataForm)
    this.router.navigate(['dropdown/link2']);
  }

}
