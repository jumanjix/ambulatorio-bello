import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomePageComponent } from './home-page/home-page.component';
import { LabAnalisiComponent } from './lab-analisi/lab-analisi.component';
import { ListaMedlavInfoComponent } from './lista-medlav-info/lista-medlav-info.component';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { LoginComponent } from './login/login.component';
import { MedicinaLavoroComponent } from './medicina-lavoro/medicina-lavoro.component';
import { PrenotazioniSsnComponent } from './prenotazioni-ssn/prenotazioni-ssn.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { VisiteSpecialisticheComponent } from './visite-specialistiche/visite-specialistiche.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';

const routes: Routes = [
  { path: 'prenotazioni', component: PrenotazioniComponent },
  { path: 'prenotazioni/ssn', component: PrenotazioniSsnComponent },
  { path: 'visite-specialistiche', component: VisiteSpecialisticheComponent },
  { path: 'laboratorio-analisi', component: LabAnalisiComponent },
  { path: 'medicina-del-lavoro', component: MedicinaLavoroComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent},
  { path: 'login', component: LoginComponent , canActivate: [AuthGuardService]},
  { path: 'elenco-prenotazioni', component: ListaPrenotazioniComponent, canActivate: [AuthGuardService] },
  { path: 'richieste-medico-lavoro', component: ListaMedlavInfoComponent, canActivate: [AuthGuardService]},
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
