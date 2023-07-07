import { Component, ViewChild } from '@angular/core';
import { Escolas } from 'src/app/shared/models/Escolas';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { EscolasService } from 'src/app/shared/services/escolas.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-lista-escolas',
  templateUrl: './lista-escolas.component.html',
  styleUrls: ['./lista-escolas.component.scss'],
})
export class ListaEscolasComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  constructor(
    private _escolasService: EscolasService,
    public dialog: MatDialog
  ) {
    this._escolasService.consultarEscolas().subscribe((escolas) => {
      this.escolas = escolas;
    });
  }
  escolas: Escolas[] = [];
  displayedColumns: string[] = ['nome', 'bairro', 'tipo'];
  openDialog(escolas: Escolas | null) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data:
        escolas != null
          ? escolas
          : {
              id: 0,
              nome: '',
              bairro: '',
              tipo: '',
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        if (this.escolas.map((p) => p.id).includes(result.id)) {
          this._escolasService.atualizarEscola(result).subscribe((data) => {
            const index = this.escolas.findIndex((p) => p.id === data.id);
            this.escolas[index] = data;
            this.table.renderRows();
          });
        } else {
          this._escolasService.adicionarEscola(result).subscribe((data) => {
            this.escolas.push(data);
            this.table.renderRows();
          });
        }
      }
    });
  }
}
