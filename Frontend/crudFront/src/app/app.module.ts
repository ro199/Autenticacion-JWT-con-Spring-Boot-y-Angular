import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaProductoComponent } from './componentes/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
