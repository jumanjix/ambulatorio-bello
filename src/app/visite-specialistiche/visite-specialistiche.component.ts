import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visite-specialistiche',
  templateUrl: './visite-specialistiche.component.html',
  styleUrls: ['./visite-specialistiche.component.css']
})
export class VisiteSpecialisticheComponent implements OnInit {

  // popola elenco visite
  visite_specialistiche : { nome : string, descr : string }[] = [
    { 
      nome: 'Agopuntura', 
      descr: `L'agopuntura utilizza l'inserzione di sottili aghi metallici in punti precisi della superficie del corpo e secondo la Medicina tradizionale cinese migliora la salute e il benessere della persona. 
      La terapia non agisce sui sintomi, ma sui meccanismi che sono alla base della loro manifestazione e può essere associata alle cure tradizionali, garantendo buoni risultati e non interferendo negativamente con le altre terapie.

      L'Organizzazione Mondiale della Sanità considera l’agopuntura un valido supporto per problematiche dermatologiche, gastroenteriche, neurologiche, osteoarticolari, otorinolaringoiatriche, 
      ostetrico-ginecologiche e per patologie allergiche e respiratorie. ` },
    { 
      nome: 'Allergologia', 
      descr: `Le prove allergologiche permettono di mirare con precisione la sostanza, o la categoria di sostanze alle quali il soggetto è sensibile. Questa diagnosi permette al paziente 
      di evitare tali sostanze o limitarne l'esposizione, per migliorare così la qualità della vita.

      Ricordiamo che in alcuni casi la risposta immunitaria nei confronti dell'allergene è di entità così grande da rendere l'esposizione pericolosa per la sopravvivenza del soggetto. 
      Da ciò si deduce l'importanza del sottoporsi ad una corretta ed accurata prova allergologica, con conseguente istruzione riguardo all'intervento farmacologico da effettuarsi in caso di episodio acuto.` 
    },
    { 
      nome: "Ambulatorio dell'Osteoporosi", 
      descr: `L’osteoporosi risulta ad oggi ancora largamente sotto-diagnosticata e sotto-trattata, mentre, al contrario, sarebbe indispensabile agire prima che la malattia possa manifestare queste pericolose conseguenze.

      La visita specialistica, completata dall’esame densitometrico e da pochi esami biochimici consentono al medico di inquadrare il rischio del paziente e di fornire tutte le indicazioni necessarie a prevenire o trattare l’osteoporosi.` 
    },
    { 
      nome: 'Andrologia', 
      descr: `La visita andrologica permette di diagnosticare, monitorare e stabilire trattamenti per le principali patologie andrologiche, quali disfunzione erettile, eiaculazione precoce, varicocele, fimosi, e altre problematiche legate all’apparato genito urinario nel maschio.
      
      La visita inizia con un’accurata anamnesi del paziente e prosegue con un attento esame della forma, dimensioni e aspetto di testicoli e pene, aiutandosi con la palpazione.
      Se il paziente presenta anche disturbi urologici o ha più di 50 anni, l'esame generalmente comprende anche l'esplorazione rettale per valutare lo stato di salute della prostata ed escludere la presenza di malattie venose anali (come emorroidi).` 
    },
    { 
      nome: 'Angiologia', 
      descr: `L'angiologia o Chirurgia diagnostica vascolare studia i vasi sanguigni, venosi e linfatici e le patologie ad essi correlate quali aneurismi, insufficienza venosa e trombosi. Un esame importante in angiologia è l’Ecodoppler delle vene del collo per la diagnosi della CCSVI che IRM effettua in regime privato. ` 
    },
    { 
      nome: 'Cardiologia', 
      descr: `La cardiologia è una branca della medicina che indaga le malattie cardiovascolari acquisite o congenite. 
      
      La risonanza magnetica (RM) cardiaca o Cardio RM è un esame diagnostico strumentale che utilizza campi elettromagnetici e onde di radiofrequenza per ottenere immagini dettagliate sulla morfologia del cuore e delle sue valvole. Questo permette di individuare eventuali alterazioni a livello strutturale e/o funzionale. 
      Questo tipo di indagine viene eseguita da personale medico altamente specializzato e dura dai 45 ai 60 minuti. ` 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
