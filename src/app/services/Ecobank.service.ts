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

  QrPayment(donnees:any){
    return this.http.post(apiUrl+"/qr_payment",donnees)
  }

  AccountBalance(donnees:any){
    return this.http.post(apiUrl+"/account_balance",donnees)
  }

  AccountEnquiry(donnees:any){
    return this.http.post(apiUrl+"/account_enquiry",donnees)
  }

  AccountStatement(donnees:any){
    return this.http.post(apiUrl+"/account_statement",donnees)
  }

  BillPayment(donnees:any){
    return this.http.post(apiUrl+"/billpayment",donnees)
  }

}
