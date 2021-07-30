import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedLavInfo } from '../med-lav-info';

@Component({
  selector: 'app-med-lav-delete-dialog',
  templateUrl: './med-lav-delete-dialog.component.html',
  styleUrls: ['./med-lav-delete-dialog.component.css']
})
export class MedLavDeleteDialogComponent implements OnInit {

  operazione! : string;

  model! : MedLavInfo;

  settori_aziendali : string[] = [
    'Industria Alimentare e Bevande',
    'Tessile',
    'Chimico',
    'Elettronica',
    'Autovelicoli',
    'Informatica',
    'Energetico'
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data : {richiesta : MedLavInfo, operazione : string }, 
              private dialogRef: MatDialogRef<MedLavDeleteDialogComponent>) { 
                this.operazione = data.operazione;
                this.model = data.richiesta;
              }

  ngOnInit(): void {
  }

  confirm(id : number) {
    console.log('id confiemd: '+id);
    
    this.dialogRef.close({ data : id})
  }

  confirmModifica( r : MedLavInfo ) {
    console.log( r );
    this.dialogRef.close( { data : r })
    
  }

  cancel() {
    this.dialogRef.close({ data: ''})
  }
}
