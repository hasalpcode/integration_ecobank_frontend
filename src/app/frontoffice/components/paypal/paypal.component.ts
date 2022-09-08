import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Directive, Input, OnInit, PipeTransform ,Pipe} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { apiUrl } from 'src/app/app.constant';
import { PaypalService } from 'src/app/services/paypal.service';
import { SocketService } from 'src/app/services/socket.service';
import * as io from 'socket.io-client';
import * as SocketIOClient from 'socket.io-client'
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})


export class PaypalComponent implements OnInit  {
  @Input()
  url!:string
  urlSafe!: SafeResourceUrl;
  newMessage: string | undefined;
  messageList: string[] = [];
  approve:any
  liens:any

  id:any
  capture: any

  public payPalConfig ?: IPayPalConfig;
  
  constructor(private paypalService:PaypalService,public sanitizer:DomSanitizer, public router:Router,private http:HttpClient,public socketService:SocketService) { 
 ;
  }
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
  
  
  addPay(myForm:NgForm){
    this.paypalService.creatOrder(myForm.value).subscribe(res=>{
      console.log(res)
      this.liens = (JSON.stringify(res))
      console.log(this.liens)
      this.approve = (JSON.parse(this.liens).links[1].href)
      this.url = this.approve
      console.log(this.approve)
    this.id = (JSON.parse(this.liens).id)
    console.log(this.id)
   this.capture = (JSON.parse(this.liens).links[3].href)
   
   //this.http.get('https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-51H9064409898642C-19A54608C86781903').subscribe(data=>{
    //console.log(data)
   //})
   fetch(this.approve, { mode: "no-cors" }).then(res=>{
    console.log(res)
   }).then(()=>{
    fetch(this.capture, { mode: "no-cors",method:'POST' }).then(res=>{
      console.log(res)
     })
   });


  
    console.log(this.capture)

    
    
   // window.open(this.approve)
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.approve);
     
    })  
    
    

  
   }


 


ngOnInit(): void {
 

  this.socketService.getsocket()
  this.socketService.notification()
}

}
