import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { CanActivateChild } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Globals } from '../globals/globals';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

	constructor(private router: Router, private globals: Globals){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

		if (this.globals.loginData.token == null){
			this.router.navigate(['/auth']);
			return false;
		}
		return true;
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

		return this.canActivate(route, state);
	}
}