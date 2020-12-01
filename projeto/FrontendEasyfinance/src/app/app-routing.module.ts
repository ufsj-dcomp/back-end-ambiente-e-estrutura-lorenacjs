import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ConsultaComponent } from './consulta/consulta.component';
import { DespesaComponent } from './despesa/despesa.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
	{path: '', component: AuthComponent},
	{path: 'home', component: HomeComponent, canActivate: [AuthGuard],
		children: [
			{path: 'despesa', component: DespesaComponent },
			{path: 'consulta', component: ConsultaComponent }
		]
	},
	{path: 'auth', component: AuthComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
