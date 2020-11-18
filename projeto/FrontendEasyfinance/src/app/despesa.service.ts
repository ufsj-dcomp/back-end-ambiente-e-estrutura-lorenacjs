import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesa } from './despesa/despesa.component';
import { HttpClient } from '@angular/common/http';
/*import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';*/

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

	constructor(private http: HttpClient){ }

	getDespesas(): Observable<Despesa[]> {
		return this.http.get<Despesa[]>("http://localhost:3000/despesa");
	}
}
