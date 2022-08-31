import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './components/frontoffice/frontoffice.component';
import { PaypalComponent } from './components/paypal/paypal.component';




const routes: Routes = [
    {
        path:"",component:FrontofficeComponent,
        children:[
            {
                path:'home',component:PaypalComponent
            },
 
            {
                path:"",redirectTo:"home",pathMatch:"full"
            }
        ]
    }

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }