import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth/auth.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  auth(nome: string, senha: string): Observable<AuthResponse> {
  	return this.http.post<AuthResponse>('http://localhost:3000/auth', {
  		nome: nome,
  		senha: senha
  	});
  }
}
