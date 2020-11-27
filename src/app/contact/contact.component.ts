import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  massdata:any = {};

  namedisp:any;
  message: string="Detailed Submitted Successfully"
  
  

  
  mobileHasError = true;
  nameHasError = true;
  emailHasError = true;

  constructor() { }

  ngOnInit(): void {
  }

  submitt(form) {
    this.namedisp= this.message;
    
    console.log(form.value);
  }

  

  





}
