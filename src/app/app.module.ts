import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModalidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
