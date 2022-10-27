import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontofficeComponent } from './components/frontoffice/frontoffice.component';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { SafePipe } from './safe.pipe';
import { MatDialogModule } from '@angular/material/dialog';

import { ToastrModule } from 'ngx-toastr';
import { EcobankComponent } from './components/ecobank/ecobank.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
 
  declarations: [
    
    FrontofficeComponent,
    SafePipe,
    EcobankComponent ,

  
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    NgxPayPalModule,
     MatDialogModule,
     ToastrModule.forRoot(),
     QRCodeModule
  ]
})
export class FrontofficeModule { }
