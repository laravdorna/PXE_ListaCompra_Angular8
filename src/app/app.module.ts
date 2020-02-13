import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ListaProductosComponent } from './Productos/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
