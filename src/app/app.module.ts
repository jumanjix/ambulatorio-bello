import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { PrenotazioniSsnComponent } from './prenotazioni-ssn/prenotazioni-ssn.component';
import { VisiteSpecialisticheComponent } from './visite-specialistiche/visite-specialistiche.component';
import { LabAnalisiComponent } from './lab-analisi/lab-analisi.component';
import { MedicinaLavoroComponent } from './medicina-lavoro/medicina-lavoro.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component'; 
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { ListaMedlavInfoComponent } from './lista-medlav-info/lista-medlav-info.component'; 
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MedLavDeleteDialogComponent } from './med-lav-delete-dialog/med-lav-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrenotazioniComponent,
    PrenotazioniSsnComponent,
    VisiteSpecialisticheComponent,
    LabAnalisiComponent,
    MedicinaLavoroComponent,
    FooterComponent,
    HomePageComponent,
    ChiSiamoComponent,
    ListaPrenotazioniComponent,
    ListaMedlavInfoComponent,
    LoginComponent,
    DialogComponent,
    MedLavDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
