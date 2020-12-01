import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesa } from './despesa/despesa.component';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Globals } from './globals/globals';

@Injectable({
  providedIn: 'root'
})

export class DespesaService {

	constructor(private http: HttpClient, private globals: Globals){ }

	getDespesas(): Observable<Despesa[]> {
		return this.http.get<Despesa[]>("http://localhost:3000/despesa", this.header());
	}

	getDespesa(despesaId: number): Observable<Despesa> {
		return this.http.get<Despesa>("http://localhost:3000/despesa/" + despesaId, this.header());
	}

	adicionar(despesa: Despesa): Observable<any>{
		return this.http.post("http://localhost:3000/despesa", despesa, this.header());
	}

	editar(despesa: Despesa): Observable<any>{
		return this.http.put("http://localhost:3000/despesa/" + despesa.id, despesa, this.header());
	}

	remover(despesaId: number): Observable<any>{
		return this.http.delete("http://localhost:3000/despesa/" + despesaId, this.header());
	}

	header(){
		return {
			headers: new HttpHeaders({'Content-Type': 'application/json',
				'x-access-token': this.globals.loginData.token
			})
		};
	}
}
