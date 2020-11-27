import { Injectable } from '@angular/core';
import { DatacenterService } from './datacenter.service';

@Injectable({
  providedIn: 'root'
})
export class DatagetService {


  constructor(private datacenter: DatacenterService) { }
}
