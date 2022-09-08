import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private http:HttpClient) { }

  creatOrder(donnees:any){
    return this.http.post(apiUrl+"/order",donnees)
  }
  capture(orderid:any){
    return this.http.post(apiUrl+"/capture/"+orderid,null)
  }

  hook(){
    return this.http.get(apiUrl+"/test")
  }

}
