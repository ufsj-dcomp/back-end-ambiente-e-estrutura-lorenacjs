import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesa } from './despesa/despesa.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

	constructor(private http: HttpClient){ }

	getDespesas(): Observable<Despesa[]> {
		return this.http.get<Despesa[]>("http://localhost:3000/despesa");
	}

	getDespesa(despesaId: number): Observable<Despesa> {
		return this.http.get<Despesa>("http://localhost:3000/despesa/" + despesaId);
	}

	adicionar(despesa: Despesa): Observable<any>{
		return this.http.post("http://localhost:3000/despesa", despesa);
	}

	editar(despesa: Despesa): Observable<any>{
		return this.http.put("http://localhost:3000/despesa/" + despesa.id, despesa);
	}

	remover(despesaId: number): Observable<any>{
		return this.http.delete("http://localhost:3000/despesa/" + despesaId);
	}
}
