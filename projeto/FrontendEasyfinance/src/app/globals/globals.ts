import { Usuario } from '../auth/auth.component';
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
	loginData = new LoginData();
}

class LoginData {
	token: string = null;
	usuario: Usuario = null;
}