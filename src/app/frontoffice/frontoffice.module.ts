import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalComponent } from './components/paypal/paypal.component';
import { FrontofficeComponent } from './components/frontoffice/frontoffice.component';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
 
  declarations: [
    PaypalComponent,
    FrontofficeComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule
  ]
})
export class FrontofficeModule { }
