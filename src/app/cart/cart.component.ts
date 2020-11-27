import { Component, OnInit } from '@angular/core';
import { DatacenterService } from '../services/datacenter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  massdata:any;


  constructor(private service: DatacenterService) { }

  ngOnInit(): void {
    this.service.getcart().subscribe((data1)=>{this.massdata=data1});
  }

}
