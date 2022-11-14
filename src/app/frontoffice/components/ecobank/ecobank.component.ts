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
  public billerListeState:any=[] ;
  public billerState:string = "";
  public interbankState:string = "";
  public domesticState:string = "";
  public jetonState:string = "";
  public momoState:string = "";
  public transactionRef_momo = "";
  public getBillerCode!:number;


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


   // bill payment

  BillPayment(myForm6:NgForm){
    this.ecobankService.BillPayment(myForm6.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content ;
      console.log(data);
      this.billerState=data;
      

    });
    
  }
  // interbank payment

  InterbankPayment(myForm7:NgForm){
    this.ecobankService.InterbankPayment(myForm7.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content ;
      console.log(data);
      this.interbankState=data;
      

    });
    
  }
  // domestic payment

  DomesticPayment(myForm8:NgForm){
    this.ecobankService.DomesticPayment(myForm8.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content ;
      console.log(data);
      this.domesticState=data;
      

    });
    
  }

  // jeton payment

  JetonPayment(myForm9:NgForm){
    this.ecobankService.JetonPayment(myForm9.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content ;
      console.log(data);
      this.jetonState=data;
      

    });
    
  }
   // momo payment

   MomoPayment(myForm10:NgForm){
    this.ecobankService.MomoPayment(myForm10.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content ;
      console.log(data);
      this.momoState=data.responseMessage;
      this.transactionRef_momo = data.transactionRef;

    });
    
  }

  // biller list

  GetBillerList(myForm11:NgForm){
    this.ecobankService.GetBillerList(myForm11.value).subscribe(res=>{
      console.log(res)
      let data:any = JSON.parse(JSON.stringify(res)).response_content.billerInfo ;
      console.log(data);
      this.billerListeState=data;
      this.getBillerCode=data;
      console.log(this.getBillerCode)
      
    });
    
  }

  

  ngOnInit(): void {
  }

}
