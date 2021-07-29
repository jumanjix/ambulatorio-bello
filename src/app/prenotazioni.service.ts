import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Prenotazione } from './prenotazione';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  private apiUrl: string = 'https://60c8ea647dafc90017ffbcea.mockapi.io/prenotazioni';

  constructor(private http: HttpClient) { }

  postPrenotazione(p: Prenotazione) {
    return this.http.post<Prenotazione>(this.apiUrl, p);
  }

  getPrenotazioni() : Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.apiUrl);
  }

  deletePrenotazione( id : number ) {
    return this.http.delete<Prenotazione>(this.apiUrl + id);
  }
}