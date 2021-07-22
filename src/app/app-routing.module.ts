import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LabAnalisiComponent } from './lab-analisi/lab-analisi.component';
import { MedicinaLavoroComponent } from './medicina-lavoro/medicina-lavoro.component';
import { PrenotazioniSsnComponent } from './prenotazioni-ssn/prenotazioni-ssn.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { VisiteSpecialisticheComponent } from './visite-specialistiche/visite-specialistiche.component';

const routes: Routes = [
  { path: 'prenotazioni', component: PrenotazioniComponent },
  { path: 'prenotazioni/ssn', component: PrenotazioniSsnComponent },
  { path: 'visite-specialistiche', component: VisiteSpecialisticheComponent },
  { path: 'laboratorio-analisi', component: LabAnalisiComponent },
  { path: 'medicina-del-lavoro', component: MedicinaLavoroComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
