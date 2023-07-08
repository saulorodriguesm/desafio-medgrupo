import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Escolas } from 'src/app/shared/models/Escolas';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  isChange!: boolean;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Escolas
  ) {}

  ngOnInit(): void {
    if (this.data.id != '') this.isChange = true;
    else this.isChange = false;
  }
  onCancel() {
    this.dialogRef.close();
  }
}
