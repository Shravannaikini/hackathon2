import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DatacenterService {

  posturl="http://localhost:3000/posts"
  carturl = "http://localhost:3000/cart"


  constructor(private http: HttpClient ) { }

  post(data):Observable<any>
  {
    return this.http.post<any>(this.posturl,data);
  }

  get():Observable<any>{
    return this.http.get<any>(this.posturl);
  }

  getcart():Observable<any>{
    return this.http.get<any>(this.carturl);
  }

  addCart(data):Observable<any>{
    return this.http.post<any>(this.carturl,data);
  }
  
  popCart(id):Observable<any>{
    return this.http.delete<any>(this.carturl,id)
  }




}
