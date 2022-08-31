import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'portail',
    loadChildren: ()=>import('./frontoffice/frontoffice.module').then(m=>m.FrontofficeModule)
  },
  {
    path:"",
    redirectTo:"/portail",
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
