import { Component, OnInit } from '@angular/core';
import { DespesaService } from '../despesa.service';


export class Despesa {
	id: number;
	year: number; 
	month: number;
	day: number;
	category: string;
	value: number;
}

	const DESPESAS: Despesa[] = [
	{id: 1, year: 2020, month: 1, day: 12, category: 'Saúde', value: 23.50},
	{id: 2, year: 2020, month: 1, day: 20, category: 'Diversão', value: 13.10}
]

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

	displayedColumns: string[] = ['id', 'year', 'month', 'day', 'category', 'value'];
	dataSource: Despesa[];

  constructor(private service: DespesaService) { }

  ngOnInit() {
  	this.service.getDespesas().subscribe(despesas => this.dataSource = despesas);
  }
}
