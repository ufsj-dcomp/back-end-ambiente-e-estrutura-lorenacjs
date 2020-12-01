import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DespesaComponent, MngDespesaDialog } from './despesa/despesa.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { Globals } from './globals/globals'; 
import { AuthGuard } from './auth/auth.guard';   

@NgModule({
  declarations: [
    AppComponent,
    DespesaComponent,
    ConsultaComponent,
    MngDespesaDialog,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [MngDespesaDialog],
  providers: [AuthGuard, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
