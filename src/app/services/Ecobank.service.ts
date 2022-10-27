import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class EcobankService {

  constructor(private http:HttpClient) { }

  cardPayment(donnees:any){
    return this.http.post(apiUrl+"/card",donnees)
  }
  // capture(orderid:any){
  //   return this.http.post(apiUrl+"/capture/"+orderid,null)
  // }

  // hook(){
  //   return this.http.get(apiUrl+"/test")
  // }
  QrPayment(donnees:any){
    return this.http.post(apiUrl+"/qr_payment",donnees)
  }

  AccountBalance(donnees:any){
    return this.http.post(apiUrl+"/account_balance",donnees)
  }

}
