import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalComponent } from './components/paypal/paypal.component';
import { FrontofficeComponent } from './components/frontoffice/frontoffice.component';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { SafePipe } from './safe.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
 
  declarations: [
    PaypalComponent,
    FrontofficeComponent,
    SafePipe ,
    PopUpComponent,
  
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    NgxPayPalModule,
     MatDialogModule,
     ToastrModule.forRoot()
  ]
})
export class FrontofficeModule { }
