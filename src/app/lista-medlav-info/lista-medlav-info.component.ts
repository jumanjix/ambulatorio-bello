import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedLavDeleteDialogComponent } from '../med-lav-delete-dialog/med-lav-delete-dialog.component';
import { MedLavInfo } from '../med-lav-info';
import { MedLavService } from '../med-lav.service';

@Component({
  selector: 'app-lista-medlav-info',
  templateUrl: './lista-medlav-info.component.html',
  styleUrls: ['./lista-medlav-info.component.css']
})
export class ListaMedlavInfoComponent implements OnInit {

  richieste : Array< MedLavInfo | undefined > = [];

  operazione! : string;

  constructor( private serviceMedLav: MedLavService, private dialog : MatDialog ) { 
    this.serviceMedLav.getRichiesteMedLav().subscribe( data => {
      this.richieste = data;
    })
  }

  ngOnInit(): void {
  }

  confermaEliminazione( req : MedLavInfo) {

    this.operazione = 'elimina';

    let dialogRef = this.dialog.open( MedLavDeleteDialogComponent, {
      data: { 'richiesta' : req, 'operazione' : this.operazione }
    });
    
    dialogRef.afterClosed().subscribe( res => {
      if ( res.data ) {
        console.log('res.data: '+ res.data);
        
        this.eliminaRichiesta( res.data );
      }
    })
  }

  eliminaRichiesta(id: number){
    let index = this.richieste.indexOf(this.richieste.find( r => r?.id == id));

    this.serviceMedLav.deleteRichiestaMedLav(id).subscribe((res)=>{
      //console.log('prima' + this.products);
      
      this.richieste.splice(index, 1);
    });
  }

  modificaRichiesta( r : MedLavInfo ) {

    this.operazione = 'modifica';

    let modificaDialogRef = this.dialog.open( MedLavDeleteDialogComponent, {
      data: {'richiesta' : r, 'operazione':  this.operazione}
    });

    modificaDialogRef.afterClosed().subscribe( res => {
      if ( res.data ) {
        //let index = this.prenotazioni.indexOf(this.prenotazioni.find( p => p?.id === res.data));
        console.log(res);
        
        this.serviceMedLav.putRichiestaMedLav(res.data).subscribe( res => {

        })
      }
    })
  }

}
