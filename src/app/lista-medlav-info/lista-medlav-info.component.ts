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

  constructor( private serviceMedLav: MedLavService, private dialog : MatDialog ) { 
    this.serviceMedLav.getRichiesteMedLav().subscribe( data => {
      this.richieste = data;
    })
  }

  ngOnInit(): void {
  }

  confermaEliminazione( req : MedLavInfo) {
    let dialogRef = this.dialog.open( MedLavDeleteDialogComponent, {
      data: req
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
}
