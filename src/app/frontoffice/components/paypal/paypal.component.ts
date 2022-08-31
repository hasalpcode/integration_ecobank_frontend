import { Component, OnInit, PipeTransform } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PaypalService } from 'src/app/services/paypal.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  approve:any
  liens:any
  url!: SafeResourceUrl
  constructor(private paypalService:PaypalService,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
     
  }
  addPay(myForm:NgForm){
    this.paypalService.creatOrder(myForm.value).subscribe(res=>{
      console.log(res)
      this.liens = (JSON.stringify(res))
      this.approve = (JSON.parse(this.liens).links[1].href)
      console.log(this.approve)
    })
  }

}
