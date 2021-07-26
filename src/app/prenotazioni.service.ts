import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Prenotazione } from './prenotazione';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  private apiUrl: string = 'https://60e7113c15387c00173e4a54.mockapi.io/';

  constructor(private http: HttpClient) { }

  postPrenotazione( p : Prenotazione) {
    return this.http.post<Prenotazione>(this.apiUrl + 'prenotazioni/', p);
  }
}