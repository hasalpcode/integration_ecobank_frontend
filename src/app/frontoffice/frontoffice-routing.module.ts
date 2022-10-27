import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcobankComponent } from './components/ecobank/ecobank.component';
import { FrontofficeComponent } from './components/frontoffice/frontoffice.component';




const routes: Routes = [
    {
        path:"",component:EcobankComponent,
        children:[
            {
                path:'home',component:EcobankComponent
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