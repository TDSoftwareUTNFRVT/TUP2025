import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejem2Component } from './components/ejem2/ejem2.component';
import { Ejercicio3Component } from './components/ejercicio3/ejercicio3.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/padre/hijo/hijo.component';
import { RickandmortyComponent } from './pages/rickandmorty/rickandmorty.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmisorComponent } from './components/emisor/emisor.component';
import { ReceptorComponent } from './components/receptor/receptor.component';
import { EmisorReactivoComponent } from './components/emisor-reactivo/emisor-reactivo.component';
import { ReceptorReactivoComponent } from './components/receptor-reactivo/receptor-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component,
    Ejem2Component,
    Ejercicio3Component,
    PadreComponent,
    HijoComponent,
    RickandmortyComponent,
    InicioComponent,
    EmisorComponent,
    ReceptorComponent,
    EmisorReactivoComponent,
    ReceptorReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
