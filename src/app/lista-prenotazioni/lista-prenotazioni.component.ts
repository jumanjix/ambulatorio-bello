import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../prenotazione';
import { PrenotazioniService } from '../prenotazioni.service';

@Component({
  selector: 'app-lista-prenotazioni',
  templateUrl: './lista-prenotazioni.component.html',
  styleUrls: ['./lista-prenotazioni.component.css']
})
export class ListaPrenotazioniComponent implements OnInit {

  prenotazioni : Prenotazione[] = [];

  constructor( private servicePrenotazioni: PrenotazioniService ) { 
    this.servicePrenotazioni.getPrenotazioni().subscribe( data => {
      this.prenotazioni = data;
    })
  }

  ngOnInit(): void {
  }

}
