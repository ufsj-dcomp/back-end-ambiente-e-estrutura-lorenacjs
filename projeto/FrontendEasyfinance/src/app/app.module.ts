import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { DespesaComponent } from './despesa/despesa.component';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [
    AppComponent,
    DespesaComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
