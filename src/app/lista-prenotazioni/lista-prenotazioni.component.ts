import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../prenotazione';
import { PrenotazioniService } from '../prenotazioni.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-lista-prenotazioni',
  templateUrl: './lista-prenotazioni.component.html',
  styleUrls: ['./lista-prenotazioni.component.css']
})
export class ListaPrenotazioniComponent implements OnInit {

  prenotazioni : Array<Prenotazione | undefined> = [];

  operazione! : string;

  constructor( private servicePrenotazioni: PrenotazioniService, private dialog : MatDialog ) { 
    this.servicePrenotazioni.getPrenotazioni().subscribe( data => {
      this.prenotazioni = data;
    })
  }

  ngOnInit(): void {
  }

  confermaEliminazione( p : Prenotazione) {

    this.operazione = 'elimina';

    let dialogRef = this.dialog.open( DialogComponent, {
      data: {'prenotazione':p, 'operazione':  this.operazione}
    });
    
    dialogRef.afterClosed().subscribe( res => {
      if ( res.data ) {
        console.log('res.data: '+ res.data);
        
        this.eliminaPrenotazione( res.data );
      }
    })
  }

  eliminaPrenotazione(id: number){
    let index = this.prenotazioni.indexOf(this.prenotazioni.find( p => p?.id == id));

    this.servicePrenotazioni.deletePrenotazione(id).subscribe((res)=>{
      //console.log('prima' + this.products);
      
      this.prenotazioni.splice(index, 1);
    });
  }

  modificaPrenotazione( p : Prenotazione ) {

    this.operazione = 'modifica';

    let modificaDialogRef = this.dialog.open( DialogComponent, {
      data: {'prenotazione':p, 'operazione':  this.operazione}
    });

    modificaDialogRef.afterClosed().subscribe( res => {
      if ( res.data ) {
        //let index = this.prenotazioni.indexOf(this.prenotazioni.find( p => p?.id === res.data));
        console.log(res);
        
        this.servicePrenotazioni.putPrenotazione(res.data).subscribe( res => {

        })
      }
    })
  }
  
}
