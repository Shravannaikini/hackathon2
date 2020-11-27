import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  regidata:any;
  //age:any;


  constructor() { }

  ngOnInit(): void {
    this.regidata = JSON.parse(localStorage.getItem('store1'));
    //this.age = JSON.parse(localStorage.getItem('token1'));
    
  }

}
