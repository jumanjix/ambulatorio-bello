import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prenotazione } from '../prenotazione';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  operazione! : string;

  model! : Prenotazione;

  orari_contatto : string[] = [ // popola la dropdown
    '8:30 - 10:30',
    '10:30 - 12:30',
    '14:00 - 16:00',
    '16:00 - 18:00'
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data : {prenotazione : Prenotazione, operazione: string}, 
              private dialogRef: MatDialogRef<DialogComponent>) {
                console.log( data);
                this.operazione = data.operazione;
                this.model = data.prenotazione;
               }

  ngOnInit(): void {
  }

  confirm(id : number) {
    console.log('id confiemd: '+id);
    
    this.dialogRef.close({ data : id})
  }

  confirmModifica( p : Prenotazione ) {
    console.log( p );
    this.dialogRef.close( { data : p })
    
  }
  cancel() {
    this.dialogRef.close({ data: ''})
  }
} 
