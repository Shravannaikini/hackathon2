import { Component, OnInit } from '@angular/core';
import { DatacenterService } from '../services/datacenter.service';


@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

  productdetails={
    productname:'',
    imageurl:''
  }


  constructor(private service: DatacenterService) { }

  ngOnInit(): void {
    
  }

  addproduct()
  {
    this.service.post(this.productdetails).subscribe((data)=>{console.log(data)});
    
  }


}
