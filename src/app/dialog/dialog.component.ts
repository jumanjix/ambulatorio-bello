import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prenotazione } from '../prenotazione';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data : Prenotazione, 
              private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  confirm(id : number) {
    this.dialogRef.close({ data : id})
  }

  cancel() {
    this.dialogRef.close({ data: ''})
  }
} 
