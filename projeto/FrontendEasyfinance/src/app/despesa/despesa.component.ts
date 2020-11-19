import { Component, Inject, OnInit } from '@angular/core';
import { DespesaService } from '../despesa.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

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

	displayedColumns: string[] = ['id', 'year', 'month', 'day', 'category', 'value', 'acoes'];
	dataSource = new MatTableDataSource<Despesa>();

  constructor(private service: DespesaService, public dialog: MatDialog) { }

  ngOnInit() {
  	this.service.getDespesas().subscribe(despesas => this.dataSource.data = despesas);
  }

  openNewDialog(): void {
  	const dialogRef = this.dialog.open(MngDespesaDialog, {
  		width: '750px',
  		data: new Despesa()
  	});

  	dialogRef.afterClosed().subscribe(despesa => {
  		console.log(despesa);
  		this.service.adicionar(despesa).subscribe(despesaId => {
  			this.service.getDespesa(despesaId).subscribe(newDespesa => {
  				this.dataSource.data = this.dataSource.data.concat(newDespesa);
  			})
  		});
  	})
  }

  openEditDialog(despesa: Despesa): void {
  	const dialogRef = this.dialog.open(MngDespesaDialog, {
  		width: '750px',
  		data: despesa
  	});

  	dialogRef.afterClosed().subscribe(despesa => {
  			this.service.editar(despesa).subscribe(_ => {
  			this.dataSource.data =	this.dataSource.data.map(oldDespesa => {
  				if (oldDespesa.id == despesa.id) return despesa;
  			});
  		});
  	})
  }

  excluir(despesa: Despesa): void {
  	this.service.remover(despesa.id).subscribe(_ => {
  			this.dataSource.data =	this.dataSource.data.filter(oldDespesa => oldDespesa.id != despesa.id);
  	})
  }
}

@Component({
	selector: 'dialog-mng-despesa',
	templateUrl: 'dialog-mng-despesa.html'
})
export class MngDespesaDialog {

	constructor(public dialogRef: MatDialogRef<MngDespesaDialog>,
	 @Inject(MAT_DIALOG_DATA) public data: Despesa) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
