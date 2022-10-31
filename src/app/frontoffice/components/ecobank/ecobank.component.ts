import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EcobankService } from 'src/app/services/Ecobank.service';

import {
  QRCodeElementType,
  QRCodeErrorCorrectionLevel,
} from "angularx-qrcode"


@Component({
  selector: 'app-ecobank',
  templateUrl: './ecobank.component.html',
  styleUrls: ['./ecobank.component.css']
})
export class EcobankComponent implements OnInit {

  public myAngularxQrCode = '';
  public acountInfos:any =[] ;
  public acountEnquiry:any =[] ;
  public acountStatement:any=[] ;


  constructor(private ecobankService:EcobankService ) {
    this.myAngularxQrCode = ''
   }
  redirect_url:any
  addCardPayment(myForm:NgForm){
    this.ecobankService.cardPayment(myForm.value).subscribe(res=>{
      console.log(res)
      
      this.redirect_url = JSON.parse(JSON.stringify(res)).response_content
      console.log(this.redirect_url);
      window.open(this.redirect_url,'popup','width=1000,height=500,margin=auto,align-items=center')

    });
  }
  // qr payment
  
  addQrPayment(myForm2:NgForm){
    console.log(myForm2.value)
    this.ecobankService.QrPayment(myForm2.value).subscribe(res=>{
      
    console.log(JSON.parse(JSON.stringify(res)).response_content.dynamicQR)
    const url_qr = JSON.parse(JSON.stringify(res)).response_content.dynamicQR
    this.myAngularxQrCode =   url_qr

    });
  }
  // account balance

  viewAccountBalance(myForm3:NgForm){
    this.ecobankService.AccountBalance(myForm3.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content ;
      console.log(data);
      this.acountInfos.push(data);

      console.log(this.acountInfos.availableBalance);

    });
    
  }

  // account enquiry

  viewAccountEnquiry(myForm4:NgForm){
    this.ecobankService.AccountEnquiry(myForm4.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content ;
      console.log(data);
      this.acountEnquiry.push(data);

    });
    
  }
  // account statement

  viewAccountStatement(myForm5:NgForm){
    this.ecobankService.AccountStatement(myForm5.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content ;
      console.log(data);
      this.acountStatement=data;
      console.log(this.acountStatement)

    });
    
  }
  

  ngOnInit(): void {
  }

}
