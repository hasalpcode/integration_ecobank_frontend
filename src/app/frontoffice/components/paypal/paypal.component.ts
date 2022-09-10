import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Directive, Input, OnInit, PipeTransform ,Pipe} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { apiUrl } from 'src/app/app.constant';
import { PaypalService } from 'src/app/services/paypal.service';
import { SocketService } from 'src/app/services/socket.service';

import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import { SafePipe } from '../../safe.pipe';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { io } from "socket.io-client"; 


var socket = io('http://localhost:3333');


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})


export class PaypalComponent implements OnInit  {
  public safeSrc!: SafeResourceUrl; 
  public approve:any
  liens:any
  toast!:any
  id:any
  capture: any
  message!: any
  public payPalConfig ?: IPayPalConfig;
  o!:any
  constructor(public dialogRef: MatDialog,private paypalService:PaypalService,public sanitizer:DomSanitizer, public router:Router,private http:HttpClient,public socketService:SocketService) { 
 ;
  }

  
  
  
  addPay(myForm:NgForm){
    this.paypalService.creatOrder(myForm.value).subscribe(res=>{
      console.log(res)
      this.liens = (JSON.stringify(res))
      console.log(this.liens)
      this.approve = (JSON.parse(this.liens).links[1].href)
     
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

    
    
  this.o =  window.open(this.approve,'popup','width=700,height=400,')
  


    
  })  
    
        
    
   }


  //  openDialog(): void {
  //   const dialogRef = this.dialogRef.open(PopUpComponent, {
      
  //     width: '250px',
      
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     dialogRef.afterClosed().subscribe(res=>{
  //       console.log('dialog closed')
  //       console.log(res)
  //     })
  //   });
  // }

  

  



ngOnInit(): void {
 
 // do {
    
  //} while (this.socketService.hook != 'APPROVED');
   
 this.socketService.notification()
 
 //let i =  setInterval(()=>{
   
  // },1000)
   

  
  
  //this.notification()
 
if (this.socketService.getsocket() ) {
  //location.reload()
 // this.socketService.notification()
}

//console.log(this.socketService.myfunction())
}

}
