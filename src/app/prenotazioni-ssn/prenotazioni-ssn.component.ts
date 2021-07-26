import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../prenotazione';

@Component({
  selector: 'app-prenotazioni-ssn',
  templateUrl: './prenotazioni-ssn.component.html',
  styleUrls: ['./prenotazioni-ssn.component.css']
})
export class PrenotazioniSsnComponent implements OnInit {

  model : Prenotazione = new Prenotazione('', '', '', ''); // campi obbligatori vanno iniziatizzati: nome, cognome, codice fiscale e nro tessera
  
  orari_contatto : string[] = [ // popola la dropdown
    '8:30 - 10:30',
    '10:30 - 12:30',
    '14:00 - 16:00',
    '16:00 - 18:00'
  ];

  agenda : Prenotazione[] = []; // array che contiene tutte le prenotazioni inserite

  constructor() { }

  ngOnInit(): void {
  }

  /* click su bottone Invia */
  inviaPrenotazione( nuovaPrenotazione: Prenotazione ) : void {
    console.log(nuovaPrenotazione );
    
    alert('Prenotazione inviata con successo!');

    this.agenda.push(nuovaPrenotazione); // inserimento nuova prenotazione nell'array 'agenda'
    console.log(this.agenda);
    
  }

}
