import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedLavInfo } from './med-lav-info';

@Injectable({
  providedIn: 'root'
})
export class MedLavService {

  private apiUrl: string = 'https://60e7113c15387c00173e4a54.mockapi.io/';

  constructor(private http: HttpClient) { }

  postRichiestaMedLav( mdInfo : MedLavInfo) {
    return this.http.post<MedLavInfo>(this.apiUrl + 'richiesteML/', mdInfo);
  }
}
