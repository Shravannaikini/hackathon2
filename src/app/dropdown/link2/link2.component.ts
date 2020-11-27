import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link2',
  templateUrl: './link2.component.html',
  styleUrls: ['./link2.component.css']
})
export class Link2Component implements OnInit {

  loginForm: FormGroup

  constructor(public builder: FormBuilder, public router: Router ) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm(){
    this.loginForm = this.builder.group({
      Username: ['', Validators.required],
      password: ['', Validators.required],
    })
 }

 onHandleSubmit(){
  this.router.navigate(['home']);
 }

}
