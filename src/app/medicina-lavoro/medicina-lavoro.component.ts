import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MedLavInfo } from '../med-lav-info';
import { MedLavService } from '../med-lav.service';
@Component({
  selector: 'app-medicina-lavoro',
  templateUrl: './medicina-lavoro.component.html',
  styleUrls: ['./medicina-lavoro.component.css']
})
export class MedicinaLavoroComponent implements OnInit {

  // popola lista attività
  attivita_medLav : string[] = [
    'Sicurezza sul posto di lavoro',
    'Igiene industriale e ambientale',
    'Check up per i dirigenti',
    'Programmi di prevenzione, salute e benessere',
    'Corsi di formazione tematici',
    'Consulenza legale e investigativa',
    'Fornitura di dispositivi di protezione individuali e dotazioni di sicurezza aziendali'
  ];

  // popola lista servizi
  servizi_medLav : {dt: string, dd: string}[] = [
    {
      dt: 'ASSUNZIONE INCARICO DI MEDICO COMPETENTE',
      dd: "Messo a disposizione ad ogni nostro cliente per la stesura o aggiornamento del Documento di valutazione dei rischi e per tutta la consulenza necessaria per l'espletamento di tutti gli obblighi derivanti dal D.Lgs. 81/08 e successive modifiche. I nostri professionisti del settore diventeranno il punto di riferimento su tutte le tematiche relative alla Medicina del lavoro."
    },
    {
      dt: 'SOPRALLUOGO AMBIENTALE E ANALISI DEI RISCHI',
      dd: "Il sopralluogo ambientale sugli impianti, i macchinari ed i locali dell'Azienda è effettuato dal Medico competente almeno 1 volta l'anno e serve a verificare le condizioni e l'ambiente di lavoro."
    },
    {
      dt: 'PROTOCOLLO DI SORVEGLIANZA SANITARIA',
      dd: "Al termine del sopralluogo e in occasione di qualsiasi cambiamento del processo produttivo, il Medico competente redige o aggiorna il Protocollo di Sorveglianza Sanitaria (PSS)."
    },
    {
      dt: "VISITE MEDICHE PERIODICHE E GIUDIZIO D'IDONEITÀ",
      dd: " Ogni lavoratore a seconda del reparto d'appartenenza e dei rischi a cui è sottoposto nello svolgimento della sua attività lavorativa, evidenziati dal Documento di Valutazione dei Rischi, è sottoposto a visita periodica per il rilascio del giudizio d'idoneità alla mansione."
    },
    {
      dt: "VISITE MEDICHE SPECIALISTICHE ED ESAMI COMPLEMENTARI",
      dd: " Alla visita medica periodica possono aggiungersi altri accertamenti strumentali, esami di laboratorio o visite mediche specialistiche, indispensabili per una corretta valutazione clinica da parte del Medico competente al fine del rilascio del giudizio d'idoneità, ad es. visite oculistiche, screening spirometrico e audiometrico, test tossicologico."
    }
  ];

  // icona elenco servizi
  freccia = faArrowRight;

  // modello richiesta info 
  model: MedLavInfo = new MedLavInfo(0, '', '', '', '', '', '');

  settori_aziendali : string[] = [
    'Industria Alimentare e Bevande',
    'Tessile',
    'Chimico',
    'Elettronica',
    'Autovelicoli',
    'Informatica',
    'Energetico'
  ]
  
  constructor( private MLService : MedLavService) { }

  ngOnInit(): void {
  }

  inviaRichiestaInfo( nuovaRichiesta : MedLavInfo ) {
    console.log(nuovaRichiesta);
    
    // chiama la POST del service med-lav.service
    this.MLService.postRichiestaMedLav(nuovaRichiesta).subscribe((res) => {
      console.log(res);      
    });

    alert('Richiesta inviata con successo!');
  }

}
