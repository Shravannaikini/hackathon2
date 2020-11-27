import { Component, OnInit } from '@angular/core';
import { DatacenterService } from '../services/datacenter.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  massdata:any[];
  massLen:number;
  show:any;
  disp1:any;
  cart:any[];
  count:number = 0;
  filterWord:any;
  display="none";
  
  button:any=[{
    id:1,
    btnState:true,
    PressCount:0},
  {
    id:2,
    btnState:true,
    PressCount:0},
  {
    id:3,
    btnState:true,
    PressCount:0},
  {
    id:4,
    btnValue:true,
    PressCount:0},
  {
    id:5,
    btnState:true,
    PressCount:0},
  {
    id:6,
    btnState:true,
    PressCount:0},
  {
    id:7,
    btnState:true,
    PressCount:0},
  {
    id:8,
    btnState:true,
    PressCount:0},
  {
    id:9,
    btnState:true,
    PressCount:0},
  {
    id:10,
    btnState:true,
    PressCount:0},
 
];

  constructor(private service: DatacenterService) { }

  ngOnInit(): void {
    this.service.get().subscribe((data)=>{console.log(this.massdata=data)});
    this.service.getcart().subscribe((data)=>{console.log(this.cart=data)});
  }

  



  addItem(id){ 
  console.log("inside add item");
  if(this.count<5 && this.button[id-1].PressCount<5 ){
   this.button[id-1].PressCount=this.button[id-1].PressCount+1; 
   console.log(this.massdata[id-1]);
   const serverRefresh:any={
       productname: this.massdata[id-1].productname,
       imageurl:this.massdata[id-1].imageurl,
       pid: this.massdata[id-1].id}
   this.service.addCart(serverRefresh).subscribe((data)=>{console.log(data)});
   this.count=this.count+1;
  } else {
    this.display="block";}
 
 }



 deleteItem(id){
  if((this.count>0 && this.count<=5)&&(this.button[id-1].PressCount>0 && this.button[id-1].PressCount<=5)){
    this.button[id-1].PressCount=this.button[id-1].PressCount-1;
    this.service.popCart(id).subscribe((data)=>{console.log(data)});
    this.count=this.count-1;
  } 
}



buttonSwitch(id){
  console.log(this.button[id].btnState);
  for(const b of this.button) {
    if(b.id==id) {
      b.btnState=false;}
  }}




 


}    //final brace
