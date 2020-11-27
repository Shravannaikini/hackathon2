import { Component, OnInit } from '@angular/core';
import { DatacenterService } from '../services/datacenter.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  


  constructor(private service: DatacenterService) { }

  ngOnInit(): void {
    
   
  }

  
  
  


   
    
}
