import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { EncabezadoComponent } from './pages/encabezado/encabezado.component';
import { PieDePaginaComponent } from './pages/pie-de-pagina/pie-de-pagina.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortafolioItemComponent } from './pages/portafolio-item/portafolio-item.component';
import { HttpClientModule } from '@angular/common/http';//nuevo

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    EncabezadoComponent,
    PieDePaginaComponent,
    AboutComponent,
    ContactComponent,
    PortafolioItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
