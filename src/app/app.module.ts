import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import {FormsModule} from '@angular/forms';
import { ProductoBComponent } from './producto-b/producto-b.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
