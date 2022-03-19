import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortafolioItemComponent } from './pages/portafolio-item/portafolio-item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'item',component:PortafolioItemComponent},
  {path:'',component:PortafolioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
