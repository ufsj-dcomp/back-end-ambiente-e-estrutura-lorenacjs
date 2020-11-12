import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { DespesaComponent } from './despesa/despesa.component';

const routes: Routes = [
	{path: 'despesa', component: DespesaComponent },
	{path: 'consulta', component: ConsultaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
